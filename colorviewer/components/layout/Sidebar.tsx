"use client";

import { Button } from "@/components/ui/button";
import { Palette, Printer, History, FileText, Settings2 } from "lucide-react";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  href?: string;
};

function SidebarItem({ icon: Icon, label, active, href }: SidebarItemProps) {
  return (
    <a
      href={href ?? "#"}
      className={[
        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
        active
          ? "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-400/10 text-[#6D6AEB] font-semibold border border-[#6D6AEB]/40"
          : "text-zinc-600 hover:bg-zinc-50",
      ].join(" ")}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-50">
        <Icon className="h-4 w-4" />
      </span>
      <span>{label}</span>
    </a>
  );
}

export default function Sidebar({ current }: { current: string }) {
  return (
    <aside className="hidden md:flex w-60 flex-col border-r border-zinc-200 bg-white/80 backdrop-blur">
      <div className="px-4 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Navegação
        </p>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        <SidebarItem
          icon={Palette}
          label="Colorimetria"
          href="/main"
          active={current === "colorimetria"}
        />
        <SidebarItem
          icon={Printer}
          label="Impressoras"
          href="/printers"
          active={current === "impressoras"}
        />
        <SidebarItem
          icon={History}
          label="Histórico"
          href="/history"
          active={current === "historico"}
        />
        <SidebarItem
          icon={FileText}
          label="Analytics"
          href="/analytics"
          active={current === "analytics"}
        />
        <SidebarItem
          icon={Settings2}
          label="Configurações"
          href="/settings"
          active={current === "configuracoes"}
        />
      </nav>

      <div className="px-4 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
        <span>Plano Premium</span>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Settings2 className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
}
