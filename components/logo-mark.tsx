// The G mark inherits currentColor so it sits correctly on both paper
// (ink/pine) and dark pine surfaces (cream) without a gradient.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 156.7 53.1 A 77 77 0 1 0 123.0 172.0 L 151.8 148.3 L 152.5 174.9 L 178.4 149.0 L 178.4 92.3 L 121.0 92.3 L 101.4 115.4 L 142.8 116.2 A 49.7 49.7 0 1 1 137.0 72.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
