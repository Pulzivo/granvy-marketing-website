// The G mark inherits currentColor so it sits correctly on both paper
// (ink/pine) and dark pine surfaces (cream) without a gradient.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M61.63 81.95 A 34 34 0 1 1 83.48 44.1"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M50 58 H72"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path d="M64 36 L86 36 L86 58 Z" fill="currentColor" />
    </svg>
  );
}
