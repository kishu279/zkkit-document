"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Commands",
    items: [
      { title: "init", href: "/docs/commands/init" },
      { title: "compile", href: "/docs/commands/compile" },
      { title: "witness", href: "/docs/commands/witness" },
      { title: "setup:trusted", href: "/docs/commands/setup-trusted" },
      { title: "setup:groth", href: "/docs/commands/setup-groth" },
      { title: "proof", href: "/docs/commands/proof" },
      { title: "verify", href: "/docs/commands/verify" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-muted/10 p-6 h-screen sticky top-0 overflow-y-auto">
      <Link href="/" className="text-lg font-bold mb-6 block">
        zkkit
      </Link>
      <nav className="space-y-6">
        {sidebarItems.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-2 text-sm">{section.title}</h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-2 py-1 text-sm rounded-md hover:bg-accent transition-colors",
                      pathname === item.href
                        ? "bg-accent font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
