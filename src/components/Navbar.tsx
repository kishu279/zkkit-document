import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xl font-bold hover:opacity-80 transition-opacity"
          >
            zkkit
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/demo"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Demo
          </Link>
          <a
            href="https://www.npmjs.com/package/zkkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            NPM
          </a>
          <div className="flex space-x-4">
            <Link href="/docs">
              <Button size="sm">Get Started</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
