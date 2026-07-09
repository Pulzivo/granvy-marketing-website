import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7" />
      <span className="text-lg font-semibold tracking-tight text-white">granvy</span>
    </Link>
  );
}
