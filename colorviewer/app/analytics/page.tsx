"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Palette,
  Printer,
  History,
  FileText,
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
};

function SidebarItem({ icon: Icon, label, active }: SidebarItemProps) {
  return (
    <button
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
    </button>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  helper: string;
  trend?: "up" | "down" | "neutral";
};

function MetricCard({ label, value, helper, trend = "up" }: MetricCardProps) {
  const trendLabel =
    trend === "up" ? "↑" : trend === "down" ? "↓" : "•";

  const trendColor =
    trend === "up"
      ? "text-emerald-600"
      : trend === "down"
      ? "text-rose-600"
      : "text-zinc-500";

  return (
    <Card className="border-zinc-200 bg-white shadow-sm">
      <CardContent className="px-4 py-3 flex flex-col gap-1">
        <p className="text-[11px] text-zinc-500">{label}</p>
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-xl font-semibold">{value}</p>
          <span className={`text-[11px] ${trendColor}`}>
            {trendLabel} {helper}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

type TopItemProps = {
  name: string;
  sub: string;
  value: string;
};

function TopItem({ name, sub, value }: TopItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs">
      <div className="flex flex-col">
        <span className="font-medium text-zinc-800">{name}</span>
        <span className="text-[11px] text-zinc-500">{sub}</span>
      </div>
      <span className="text-[11px] font-semibold text-zinc-800">
        {value}
      </span>
    </div>
  );
}

// Simulação de pontos de tendência (só pra visual)
const trendData = [28, 32, 35, 38, 36, 40, 42, 39, 41, 45];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] bg-zinc-50 text-zinc-900">
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-60 flex-col border-r border-zinc-200 bg-white/80 backdrop-blur">
        <div className="px-4 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Navegação
          </p>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          <SidebarItem icon={Palette} label="Colorimetria" />
          <SidebarItem icon={Printer} label="Impressoras" />
          <SidebarItem icon={History} label="Histórico" />
          <SidebarItem icon={FileText} label="Resumos / Analytics" active />
        </nav>

        <div className="px-4 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Plano Premium</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Activity className="h-4 w-4" />
          </Button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 px-6 py-6 md:px-10 md:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Analytics
              </h1>
              <p className="text-sm text-zinc-500">
                Acompanhe consumo de tinta, comportamento das artes e
                impressoras mais usadas ao longo do tempo.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Select defaultValue="30d">
                <SelectTrigger className="h-8 w-[160px] text-xs">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 dias</SelectItem>
                  <SelectItem value="30d">Últimos 30 dias</SelectItem>
                  <SelectItem value="90d">Últimos 90 dias</SelectItem>
                  <SelectItem value="12m">Últimos 12 meses</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="todas">
                <SelectTrigger className="h-8 w-[180px] text-xs">
                  <SelectValue placeholder="Impressora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as impressoras</SelectItem>
                  <SelectItem value="4">Impressora 4</SelectItem>
                  <SelectItem value="3">Impressora 3</SelectItem>
                  <SelectItem value="2">Impressora 2</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Filtro avançado
              </Button>
            </div>
          </div>

          <Separator className="mt-2" />
        </div>

        {/* Métricas principais */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard
            label="Cobertura média total"
            value="42%"
            helper="+3pts vs. último período"
            trend="up"
          />
          <MetricCard
            label="Arquivos analisados"
            value="124"
            helper="+18 arquivos"
            trend="up"
          />
          <MetricCard
            label="Impressoras ativas"
            value="3"
            helper="2 com uso intenso"
            trend="neutral"
          />
          <MetricCard
            label="Jobs com alerta"
            value="9"
            helper="3 acima de 55%"
            trend="down"
          />
        </section>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6 items-start">
          {/* Tendência + distribuição */}
          <Card className="shadow-md border-zinc-200 bg-white/95">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-[#6D6AEB]" />
                    Tendência de cobertura
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Visão geral da cobertura total estimada ao longo do tempo.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-[11px]">
                  Intervalo: últimos 30 dias
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Gráfico simulado */}
              <div className="relative mt-2 h-40 rounded-xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white px-4 py-3 flex items-end gap-2">
                {trendData.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center justify-end gap-1"
                  >
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-[#6D6AEB] via-purple-500 to-cyan-400"
                      style={{ height: `${(v / 60) * 100}%` }}
                    />
                  </div>
                ))}
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-zinc-200/60" />
              </div>

              <div className="flex flex-wrap gap-4 text-[11px] text-zinc-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#6D6AEB]" />
                  Cobertura média diária
                </div>
                <span>Maior pico recente: 51% em 09/11</span>
                <span>Menor pico recente: 29% em 03/11</span>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-zinc-600">
                    Distribuição por faixa de cobertura
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span>0% – 25%</span>
                        <span className="text-[11px] text-zinc-500">18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span>25% – 40%</span>
                        <span className="text-[11px] text-zinc-500">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span>40% – 55%</span>
                        <span className="text-[11px] text-zinc-500">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span>55%+</span>
                        <span className="text-[11px] text-zinc-500">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-zinc-600">
                    Comparativo de canais CMYK
                  </p>
                  <div className="space-y-3">
                    <ChannelRow label="Cyan" value={28} />
                    <ChannelRow label="Magenta" value={41} />
                    <ChannelRow label="Yellow" value={33} />
                    <ChannelRow label="Black" value={12} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lateral – Top listas */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <PieChart className="h-4 w-4 text-[#6D6AEB]" />
                Destaques do período
              </CardTitle>
              <CardDescription className="text-xs">
                Arquivos e impressoras que mais impactaram o consumo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs">
              {/* Top arquivos */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium text-zinc-600">
                  Arquivos com maior cobertura
                </p>
                <div className="space-y-2">
                  <TopItem
                    name="flyer_black_friday.png"
                    sub="Impressora 3 · Couchê"
                    value="51% total"
                  />
                  <TopItem
                    name="banner_loja_outdoor.tif"
                    sub="Impressora 4 · Offset"
                    value="54% total"
                  />
                  <TopItem
                    name="capa_catalogo_final.pdf"
                    sub="Impressora 4 · Couchê"
                    value="46% total"
                  />
                </div>
              </div>

              <Separator />

              {/* Top impressoras */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium text-zinc-600">
                  Impressoras mais utilizadas
                </p>
                <div className="space-y-2">
                  <TopItem
                    name="Impressora 4"
                    sub="Perfil CMYK · Setor Gráfico"
                    value="57 jobs"
                  />
                  <TopItem
                    name="Impressora 3"
                    sub="Perfil CMY · Recepção"
                    value="28 jobs"
                  />
                  <TopItem
                    name="Impressora 2"
                    sub="Monocromática · Administração"
                    value="15 jobs"
                  />
                </div>
              </div>

              <Separator />

              {/* CTA */}
              <div className="flex flex-col gap-2">
                <p className="text-[11px] text-zinc-500">
                  Use estes dados para renegociar contratos de impressão, ajustar
                  perfis de cor e criar padrões para artes futuras.
                </p>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  Gerar relatório detalhado
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

/* ---- COMPONENTE DE APOIO PARA CANAL CMYK ---- */

function ChannelRow({ label, value }: { label: string; value: number }) {
  const colorMap: Record<string, string> = {
    Cyan: "bg-cyan-500",
    Magenta: "bg-pink-500",
    Yellow: "bg-yellow-400",
    Black: "bg-zinc-800",
  };

  const textColor = label === "Yellow" ? "text-zinc-900" : "text-white";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-zinc-600">{label}</span>
        <span className="text-[11px] text-zinc-600">{value}%</span>
      </div>
      <div className="h-5 w-full rounded-full bg-zinc-100 overflow-hidden">
        <div
          className={`h-full flex items-center justify-end pr-2 text-[10px] ${colorMap[label]} ${textColor}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}
