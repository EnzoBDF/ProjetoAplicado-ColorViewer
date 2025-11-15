"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Palette,
  Printer,
  History,
  FileText,
  Settings2,
  CreditCard,
  Crown,
  AlertTriangle,
  Receipt,
  CheckCircle2,
} from "lucide-react";

export default function PlanSettingsPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] bg-zinc-50 text-zinc-900">
      {/* SIDEBAR (mesmo padrão das outras páginas) */}
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
          <SidebarItem icon={FileText} label="Analytics" />
          <SidebarItem icon={Settings2} label="Configurações" />
        </nav>

        <div className="px-4 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Plano Pro</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 px-6 py-6 md:px-10 md:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Plano & faturamento
              </h1>
              <p className="text-sm text-zinc-500">
                Revise seu plano atual, limites de uso e histórico de cobranças.
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 flex items-center gap-1">
                <Crown className="h-3 w-3" />
                Plano atual: Pro mensal
              </Badge>
              <Button variant="outline" size="sm" className="text-xs">
                Alterar plano
              </Button>
            </div>
          </div>

          <Separator className="mt-2" />
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          {/* COLUNA ESQUERDA: Plano + Limites */}
          <div className="space-y-6">
            {/* Plano atual */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Crown className="h-4 w-4 text-[#6D6AEB]" />
                    Plano atual
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Informações de valor, renovação e benefícios do seu plano.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 text-sm">
                <div className="flex flex-wrap items-baseline gap-2">
                  <p className="text-3xl font-semibold text-zinc-900">
                    R$ 129<span className="text-base font-normal">/mês</span>
                  </p>
                  <Badge variant="outline" className="text-[11px]">
                    Pro · Cobrança mensal
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1">
                    <p className="font-medium text-zinc-700">
                      Próxima renovação
                    </p>
                    <p className="text-zinc-500">10 de dezembro de 2025</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-zinc-700">
                      Método de pagamento
                    </p>
                    <p className="text-zinc-500 flex items-center gap-1">
                      <CreditCard className="h-3 w-3" />
                      Visa terminada em •••• 1234
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-zinc-700">
                      Status da assinatura
                    </p>
                    <p className="text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Ativa e em dia
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-zinc-700">
                      Próxima fatura estimada
                    </p>
                    <p className="text-zinc-500">R$ 129,00</p>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2 text-[11px]">
                  <Badge
                    variant="outline"
                    className="border-emerald-200 bg-emerald-50 text-emerald-700"
                  >
                    Até 5 impressoras
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-indigo-200 bg-indigo-50 text-indigo-700"
                  >
                    Até 10 membros de equipe
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-zinc-200 bg-zinc-50 text-zinc-700"
                  >
                    Análises ilimitadas
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>
                  Mudanças de plano podem ser aplicadas imediatamente ou no
                  próximo ciclo, conforme sua escolha.
                </span>
                <Button variant="outline" size="sm" className="text-xs">
                  Ver opções de upgrade
                </Button>
              </CardFooter>
            </Card>

            {/* Limites e uso */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base">
                  Limites e uso do plano
                </CardTitle>
                <CardDescription className="text-xs">
                  Acompanhe como o uso atual se compara às capacidades do seu
                  plano.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-xs">
                {/* Análises */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-700">
                      Análises de arquivos neste mês
                    </p>
                    <span className="text-[11px] text-zinc-500">
                      342 de ∞
                    </span>
                  </div>
                  <Progress value={30} className="h-2" />
                  <p className="text-[11px] text-zinc-500">
                    No plano Pro, análises de arquivos não são limitadas, mas
                    podem existir limites técnicos por volume de fila.
                  </p>
                </div>

                {/* Impressoras */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-700">
                      Impressoras cadastradas
                    </p>
                    <span className="text-[11px] text-zinc-500">
                      4 de 5
                    </span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-[11px] text-zinc-500">
                    Você está se aproximando do limite de impressoras deste
                    plano. Considere um upgrade se precisar conectar mais
                    máquinas.
                  </p>
                </div>

                {/* Membros */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-700">
                      Membros do workspace
                    </p>
                    <span className="text-[11px] text-zinc-500">
                      7 de 10
                    </span>
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-[11px] text-zinc-500">
                    Gerencie membros em{" "}
                    <span className="font-medium">Configurações &gt; Workspace</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* COLUNA DIREITA: Cobranças & zona de risco */}
          <div className="space-y-6">
            {/* Histórico de cobrança */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-[#6D6AEB]" />
                    Histórico de cobranças
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Faturas recentes associadas a este workspace.
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Ver todas as faturas
                </Button>
              </CardHeader>

              <CardContent>
                <ScrollArea className="max-h-72 pr-1">
                  <div className="space-y-2 text-xs">
                    {[
                      {
                        id: "fatura_2025_10",
                        date: "10/10/2025",
                        amount: "R$ 129,00",
                        status: "pago",
                      },
                      {
                        id: "fatura_2025_09",
                        date: "10/09/2025",
                        amount: "R$ 129,00",
                        status: "pago",
                      },
                      {
                        id: "fatura_2025_08",
                        date: "10/08/2025",
                        amount: "R$ 129,00",
                        status: "pago",
                      },
                    ].map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between rounded-lg border border-zinc-100 bg-white px-3 py-2"
                      >
                        <div className="space-y-0.5">
                          <p className="font-medium text-zinc-800">
                            {invoice.amount}
                          </p>
                          <p className="text-[11px] text-zinc-500">
                            Vencimento em {invoice.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="text-[10px] border-emerald-200 bg-emerald-50 text-emerald-700"
                          >
                            {invoice.status === "pago" ? "Pago" : "Pendente"}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[11px]"
                          >
                            Baixar recibo
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Zona de risco / cancelamento */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2 text-rose-700">
                  <AlertTriangle className="h-4 w-4" />
                  Zona de risco
                </CardTitle>
                <CardDescription className="text-xs">
                  Ações que podem impactar diretamente sua assinatura e acesso.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-xs">
                <div className="space-y-1">
                  <p className="font-medium text-zinc-700">
                    Pausar ou cancelar assinatura
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    Ao cancelar, o acesso ao ColorViewer será mantido até o fim
                    do ciclo atual. Depois disso, apenas recursos básicos e
                    leitura de dados históricos poderão estar disponíveis.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <p className="text-[11px] text-zinc-500 max-w-xs">
                  Recomendamos exportar relatórios importantes antes de qualquer
                  alteração permanente.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 text-[11px]"
                >
                  Iniciar cancelamento
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

/* --------- COMPONENTE DE APOIO: SidebarItem ---------- */

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
