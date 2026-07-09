"use client";

import { useEffect, useRef } from "react";

const VERTEX_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (uv - 0.5) * 2.0;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.5;

  float v1 = sin(p.x * 4.0 + t);
  float v2 = sin(p.y * 4.0 + t * 1.3);
  float v3 = sin((p.x + p.y) * 4.0 + t * 0.8);
  float v4 = sin(sqrt(p.x * p.x + p.y * p.y + 0.1) * 6.0 - t * 1.6);

  float v = (v1 + v2 + v3 + v4) * 0.25;
  float band = 0.5 + 0.5 * v;

  vec3 black = vec3(0.0, 0.0, 0.0);
  vec3 deepGreen = vec3(0.01, 0.06, 0.045);
  vec3 green = vec3(0.0627, 0.7255, 0.5059);
  vec3 lightGreen = vec3(0.3529, 0.949, 0.7137);

  vec3 color = mix(deepGreen, green, smoothstep(0.15, 0.75, band));
  color = mix(color, lightGreen, smoothstep(0.72, 0.95, band));
  color = mix(black, color, smoothstep(0.0, 0.2, band));

  float vign = 1.0 - smoothstep(0.6, 1.5, length(p));
  color *= 0.5 + vign * 0.6;

  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function AnimatedShader({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext | null;
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let rafId = 0;
    const start = performance.now();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas as HTMLCanvasElement;
      const width = Math.max(1, Math.floor(clientWidth * dpr));
      const height = Math.max(1, Math.floor(clientHeight * dpr));
      if (canvas!.width !== width || canvas!.height !== height) {
        canvas!.width = width;
        canvas!.height = height;
        gl!.viewport(0, 0, width, height);
      }
    }

    function render(now: number) {
      resize();
      const elapsed = reduceMotion ? 0 : (now - start) / 1000;
      gl!.uniform2f(resolutionLocation, canvas!.width, canvas!.height);
      gl!.uniform1f(timeLocation, elapsed);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      if (!reduceMotion) {
        rafId = requestAnimationFrame(render);
      }
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
