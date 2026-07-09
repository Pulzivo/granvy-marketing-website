"use client";

import { useState } from "react";
import { AnimatedShader } from "./animated-shader";

/**
 * Video-ready background: drop a looping clip at /public/hero.mp4 (e.g. a
 * Seedance 2.0 export) and it becomes the hero background automatically,
 * fading in once it can play. Until then — or if it 404s — an animated
 * WebGL gradient fills the space. No code changes needed to swap.
 */
export function HeroBackground() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{ opacity: videoReady && !videoFailed ? 0 : 1, transition: "opacity 1.2s ease" }}
      >
        <AnimatedShader className="absolute inset-0 h-full w-full" />
        <div className="bg-grid absolute inset-0 opacity-20 mix-blend-overlay" />
      </div>

      {!videoFailed && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1.2s ease" }}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black" />
    </div>
  );
}
