"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV = [
  { href: "/", label: "Início", exact: true },
  { href: "/main", label: "Main" },
  { href: "/printers", label: "Impressoras" },
  { href: "/history", label: "Histórico" },
  { href: "/analytics", label: "Analytics" },
  { href: "/pricing", label: "Planos" },
  { href: "/settings", label: "Configurações" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Cadastro" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="w-full border-b border-zinc-200 bg-white/70 backdrop-blur-lg supports-[backdrop-filter]:bg-white/40 top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          ColorViewer
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map(({ href, label, exact }) => (
            <Link
              key={href}
              href={href}
              prefetch
              aria-current={isActive(href, exact) ? "page" : undefined}
              className={clsx(
                "relative transition font-medium",
                isActive(href, exact)
                  ? "text-indigo-600"
                  : "text-zinc-600 hover:text-indigo-600"
              )}
            >
              {label}

              {/* Active underline animation */}
              {isActive(href, exact) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600 rounded-full animate-[fadeSlideIn_0.25s_ease-out]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <div className="mt-6 space-y-4">
                {NAV.map(({ href, label, exact }) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={true}
                    className={clsx(
                      "block px-2 py-2 rounded-lg text-sm transition font-medium",
                      isActive(href, exact)
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-zinc-700 hover:bg-zinc-100"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
