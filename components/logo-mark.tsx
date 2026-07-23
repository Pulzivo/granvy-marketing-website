export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="granvy-g-gradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path
        d="M61.63 81.95 A 34 34 0 1 1 83.48 44.1"
        stroke="url(#granvy-g-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M50 58 H72"
        stroke="url(#granvy-g-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path d="M64 36 L86 36 L86 58 Z" fill="url(#granvy-g-gradient)" />
    </svg>
  );
}
