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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

import {
  Palette,
  Printer,
  History,
  FileText,
  Settings2,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  Power,
} from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


type PrinterInfo = {
  id: string;
  name: string;
  model: string;
  location: string;
  status: "online" | "offline" | "warning";
  profile: "CMYK" | "CMY" | "Monocromática";
  lastJob: string;
  coverageAvg: string;
};

const printersMock: PrinterInfo[] = [
  {
    id: "printer-4",
    name: "Impressora 4",
    model: "HP Color Pro 9200",
    location: "Setor Gráfico - Sala 03",
    status: "online",
    profile: "CMYK",
    lastJob: "catálogo_outubro_final.pdf",
    coverageAvg: "C 23 · M 47 · Y 18 · K 6",
  },
  {
    id: "printer-3",
    name: "Impressora 3",
    model: "Epson EcoPrint 450",
    location: "Escritório - Recepção",
    status: "warning",
    profile: "CMY",
    lastJob: "flyer_black_friday.png",
    coverageAvg: "C 12 · M 39 · Y 21 · K 0",
  },
  {
    id: "printer-2",
    name: "Impressora 2",
    model: "Brother Laser 2100",
    location: "Administração",
    status: "offline",
    profile: "Monocromática",
    lastJob: "relatorio_financeiro_10-2025.pdf",
    coverageAvg: "K 7",
  },
];

export default function PrintersPage() {
  const [selectedId, setSelectedId] = useState("printer-4");
  const selected = printersMock.find((p) => p.id === selectedId)!;

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
          <SidebarItem icon={Printer} label="Impressoras" active />
          <SidebarItem icon={History} label="Histórico" />
          <SidebarItem icon={FileText} label="Resumos" />
        </nav>

        <div className="px-4 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Plano Premium</span>
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
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Impressoras
              </h1>
              <p className="text-sm text-zinc-500">
                Gerencie as impressoras cadastradas, perfis de cor e status em
                tempo real.
              </p>
            </div>

            <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" size="sm" className="gap-2">
      <Plus className="h-4 w-4" />
      Adicionar impressora
    </Button>
  </DialogTrigger>

  <DialogContent className="max-w-xl">
    <DialogHeader>
      <DialogTitle>Cadastrar nova impressora</DialogTitle>
      <DialogDescription className="text-xs">
        Preencha os dados principais da máquina. Depois esses valores serão
        usados para estimar o custo de impressão por página.
      </DialogDescription>
    </DialogHeader>

    <div className="space-y-4 py-2 text-sm">
      {/* Dados básicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-600">Nome da impressora</p>
          <Input placeholder="Ex.: Impressora 5" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-600">Modelo</p>
          <Input placeholder="Ex.: HP Color Pro 9200" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-600">Localização</p>
          <Input placeholder="Ex.: Setor Gráfico - Sala 03" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-600">Endereço IP</p>
          <Input placeholder="Ex.: 192.168.0.24" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-600">Perfil</p>
          <Select defaultValue="CMYK">
            <SelectTrigger className="h-9 text-xs">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CMYK">CMYK</SelectItem>
              <SelectItem value="CMY">CMY</SelectItem>
              <SelectItem value="MONO">Monocromática</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 mt-5">
          <Checkbox id="default" />
          <label htmlFor="default" className="text-[11px] text-zinc-600">
            Definir esta impressora como padrão para novos jobs
          </label>
        </div>
      </div>

      <Separator />

      {/* Custos básicos por peça/cor */}
      {/* Peças & custos básicos */}
<div className="space-y-2">
  <p className="text-xs font-semibold text-zinc-700">
    Peças & custos básicos
  </p>
  <p className="text-[11px] text-zinc-500">
    Informe o custo e o rendimento estimado de cada cartucho/peça. 
    O ColorViewer usará isso para calcular o custo por página.
  </p>

  {/* AGORA EM GRID 2x2 */}
  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
    {["C", "M", "Y", "K"].map((channel) => (
      <div
        key={channel}
        className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2"
      >
        <span className="text-xs font-semibold text-zinc-600">
          {channel}
        </span>

        <div className="grid grid-cols-1 gap-2">
          <div className="space-y-1">
            <p className="text-[11px] text-zinc-500">Custo da peça (R$)</p>
            <Input
              type="number"
              step="0.01"
              min="0"
              placeholder="Ex.: 350,00"
              className="h-8 text-xs"
            />
          </div>

          <div className="space-y-1">
            <p className="text-[11px] text-zinc-500">
              Rendimento (páginas)
            </p>
            <Input
              type="number"
              min="1"
              placeholder="Ex.: 5000"
              className="h-8 text-xs"
            />
          </div>
        </div>
      </div>
    ))}
  </div>

  <p className="text-[11px] text-zinc-500">
    Para impressoras monocromáticas, você pode preencher apenas o canal K.
  </p>
</div>

    </div>

    <DialogFooter className="flex justify-end gap-2">
      <Button variant="outline" size="sm">
        Cancelar
      </Button>
      <Button
        size="sm"
        className="bg-[#6D6AEB] hover:bg-[#6c6aebcb] text-white"
      >
        Salvar impressora
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>


          </div>

          <Separator className="mt-2" />
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.15fr_0.9fr] gap-6 items-start">
          {/* Lista de impressoras */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Printer className="h-4 w-4 text-[#6D6AEB]" />
                Impressoras cadastradas
              </CardTitle>
              <CardDescription className="text-xs">
                Selecione uma impressora para ver detalhes e ajustes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ScrollArea className="h-[320px] pr-3">
                <div className="space-y-2">
                  {printersMock.map((printer) => (
                    <button
                      key={printer.id}
                      onClick={() => setSelectedId(printer.id)}
                      className={
                        "w-full rounded-xl border px-3 py-3 text-left text-sm flex items-center justify-between transition " +
                        (printer.id === selectedId
                          ? "border-[#6D6AEB]/60 bg-[#6D6AEB]/5 shadow-sm"
                          : "border-zinc-200 bg-white hover:bg-zinc-50")
                      }
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{printer.name}</span>
                        <span className="text-xs text-zinc-500">
                          {printer.model}
                        </span>
                        <span className="text-[11px] text-zinc-400 mt-1">
                          {printer.location}
                        </span>
                      </div>
                      <PrinterStatusBadge status={printer.status} />
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Detalhes da impressora */}
          <Card className="shadow-md border-zinc-200 bg-white/95">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {selected.name}
                    <PrinterStatusBadge status={selected.status} />
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {selected.model} · {selected.location}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-[11px]">
                  Perfil: {selected.profile}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Tabs defaultValue="perfil">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="perfil" className="text-xs">
                    Perfil de cor
                  </TabsTrigger>
                  <TabsTrigger value="rede" className="text-xs">
                    Rede & fila
                  </TabsTrigger>
                  <TabsTrigger value="manutencao" className="text-xs">
                    Manutenção
                  </TabsTrigger>
                </TabsList>

                {/* Perfil de cor */}
                <TabsContent value="perfil" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-zinc-600">
                      Nome do perfil ICC
                    </span>
                    <Input
                      defaultValue="ColorViewer_Padrao_CMYK_v1.icc"
                      className="text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-medium text-zinc-600">
                        Cobertura média recente
                      </span>
                      <p className="text-[11px] text-zinc-500">
                        Baseada nas últimas 50 análises enviadas para esta
                        impressora.
                      </p>
                      <div className="mt-2 rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2">
                        <span className="text-[11px] text-zinc-500">
                          Médias gerais
                        </span>
                        <p className="text-sm font-semibold">
                          {selected.coverageAvg}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-medium text-zinc-600">
                        Modo de otimização
                      </span>
                      <div className="space-y-2 text-[11px] mt-2">
                        <LabelSwitch
                          label="Priorizar economia de tinta"
                          defaultChecked={false}
                        />
                        <LabelSwitch
                          label="Ajustar preto composto automaticamente"
                          defaultChecked
                        />
                        <LabelSwitch
                          label="Aplicar correção de saturação para fotos"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Rede & fila */}
                <TabsContent value="rede" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <span className="font-medium text-zinc-600">
                        Endereço de rede
                      </span>
                      <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2 space-y-1">
                        <p className="text-sm font-mono">192.168.0.24</p>
                        <p className="text-[11px] text-zinc-500">
                          DHCP reservado · Porta 9100
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Wifi className="h-4 w-4 text-emerald-500" />
                        <span className="text-[11px] text-emerald-700">
                          Conectada à rede · Latência média 4ms
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-medium text-zinc-600">
                        Fila de impressão
                      </span>
                      <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2 space-y-1">
                        <p className="text-sm">Nenhum trabalho pendente</p>
                        <p className="text-[11px] text-zinc-500">
                          Último trabalho concluído há 12 minutos.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-1">
                        Ver fila avançada
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Manutenção */}
                <TabsContent value="manutencao" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <span className="font-medium text-zinc-600">
                        Estado geral
                      </span>
                      <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2 space-y-1">
                        <p className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          Sem alertas críticos no momento.
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          Última manutenção preventiva registrada há 32 dias.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-medium text-zinc-600">
                        Ações rápidas
                      </span>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Limpar cabeças de impressão
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Imprimir página de teste
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Registrar manutenção
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex items-center justify-between text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <Power
                  className={`h-4 w-4 ${
                    selected.status === "online"
                      ? "text-emerald-500"
                      : selected.status === "offline"
                      ? "text-zinc-400"
                      : "text-amber-500"
                  }`}
                />
                <span>
                  {selected.status === "online" &&
                    "Pronta para receber novos trabalhos."}
                  {selected.status === "offline" &&
                    "Impressora fora de linha. Verifique conexões físicas."}
                  {selected.status === "warning" &&
                    "Atenção: níveis de tinta baixos ou alerta de atolamento."}
                </span>
              </div>

              <Button variant="ghost" size="sm" className="text-[11px]">
                Remover impressora
              </Button>
            </CardFooter>
          </Card>

          {/* Status & Alertas */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Status & alertas
              </CardTitle>
              <CardDescription className="text-xs">
                Visão rápida de possíveis problemas nas impressoras.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-[2px]" />
                <div>
                  <p className="font-medium text-emerald-700">
                    Impressora 4 operando normalmente
                  </p>
                  <p className="text-[11px] text-emerald-700/80">
                    Sem gargalos de fila e níveis de tinta dentro do esperado.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-[2px]" />
                <div>
                  <p className="font-medium text-amber-700">
                    Impressora 3 com tinta magenta baixa
                  </p>
                  <p className="text-[11px] text-amber-700/80">
                    Recomenda-se agendar reposição antes dos próximos lotes
                    grandes de impressão.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 flex items-start gap-2">
                <Printer className="h-4 w-4 text-zinc-500 mt-[2px]" />
                <div>
                  <p className="font-medium text-zinc-700">
                    Impressora 2 está offline
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    Último contato há 3 horas. Verifique energia e rede na sala
                    de Administração.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

/* --------- COMPONENTES DE APOIO ---------- */

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

type Status = "online" | "offline" | "warning";

function PrinterStatusBadge({ status }: { status: Status }) {
  if (status === "online") {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[11px]">
        Online
      </Badge>
    );
  }
  if (status === "offline") {
    return (
      <Badge className="bg-zinc-100 text-zinc-600 border-zinc-200 text-[11px]">
        Offline
      </Badge>
    );
  }
  return (
    <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-[11px]">
      Atenção
    </Badge>
  );
}

function LabelSwitch({
  label,
  defaultChecked,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2">
      <Switch defaultChecked={defaultChecked} />
      <span className="text-[11px] text-zinc-600">{label}</span>
    </label>
  );
}
