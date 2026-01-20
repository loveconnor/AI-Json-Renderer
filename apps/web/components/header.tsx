import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-border bg-background/80">
      <div className="max-w-5xl mx-auto px-6 h-14 flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold hover:opacity-70 transition-opacity"
        >
          AI JSON Renderer
        </Link>
        <nav className="flex gap-4 items-center text-sm">
          <Link href="/learn" className="hover:opacity-70 transition-opacity">
            Learn
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
