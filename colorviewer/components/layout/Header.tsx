"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Label } from "@radix-ui/react-select";

const NAV = [
  { href: "/", label: "Início", exact: true },
  { href: "/main", label: "App" },
  { href: "/printers", label: "Impressoras" },
  { href: "/settings", label: "Configurações" },
  { href: "/login", label: "Login" },
  { href: "/analytics", label: "Analytics"},
  { href: "/pricing", label: "Planos"},
  { href: "/history", label: "Histórico"},
  { href: "/register", label: "Cadastro"},
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-zinc-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          ColorViewer
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {NAV.map(({ href, label, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                prefetch
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "transition",
                  active ? "text-indigo-600 font-semibold" : "text-zinc-700 hover:text-indigo-600"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}