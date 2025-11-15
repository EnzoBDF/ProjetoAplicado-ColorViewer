"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/layout/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Search,
  Filter,
  Download,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

type HistoryItem = {
  id: string;
  filename: string;
  printer: string;
  paper: string;
  date: string;
  cmyk: string;
  totalCoverage: string;
  status: "ok" | "warning";
};

const historyMock: HistoryItem[] = [
  {
    id: "1",
    filename: "capa_catalogo_final.pdf",
    printer: "Impressora 4",
    paper: "Couchê",
    date: "10/11/2025 · 14:32",
    cmyk: "C 23 · M 48 · Y 17 · K 6",
    totalCoverage: "46%",
    status: "ok",
  },
  {
    id: "2",
    filename: "flyer_black_friday.png",
    printer: "Impressora 3",
    paper: "Couchê",
    date: "09/11/2025 · 09:18",
    cmyk: "C 12 · M 52 · Y 21 · K 3",
    totalCoverage: "51%",
    status: "warning",
  },
  {
    id: "3",
    filename: "banner_loja_outdoor.tif",
    printer: "Impressora 4",
    paper: "Offset",
    date: "08/11/2025 · 16:05",
    cmyk: "C 9 · M 32 · Y 11 · K 2",
    totalCoverage: "34%",
    status: "ok",
  },
  {
    id: "4",
    filename: "cartao_visita_novo.ai",
    printer: "Impressora 2",
    paper: "Couchê",
    date: "06/11/2025 · 11:40",
    cmyk: "K 7",
    totalCoverage: "7%",
    status: "ok",
  },
];

export default function HistoryPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] bg-zinc-50 text-zinc-900 ">
      {/* SIDEBAR */}
      <Sidebar current="historico" />
      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 px-6 py-6 md:px-10 md:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Histórico</h1>
              <p className="text-sm text-zinc-500">
                Consulte análises anteriores de colorimetria, reabra arquivos e
                exporte relatórios.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4 text-indigo-600" />
                Exportar CSV
              </Button>
            </div>
          </div>

          <Separator className="mt-2" />
        </div>

        {/* Filtros + grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_0.9fr] gap-6 items-start">
          {/* Coluna principal: tabela */}
          <Card className="shadow-md border-zinc-200 bg-white/95">
            <CardHeader>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      <History className="h-4 w-4 text-[#6D6AEB]" />
                      Análises realizadas
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Resultados ordenados da mais recente para a mais antiga.
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Select defaultValue="tudo">
                      <SelectTrigger className="h-8 w-[150px] text-xs">
                        <SelectValue placeholder="Período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tudo">Tudo</SelectItem>
                        <SelectItem value="7d">Últimos 7 dias</SelectItem>
                        <SelectItem value="30d">Últimos 30 dias</SelectItem>
                        <SelectItem value="ano">Este ano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search + filtros */}
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                    <Input
                      placeholder="Buscar por nome do arquivo ou palavra-chave..."
                      className="pl-9 h-9 text-sm"
                    />
                  </div>

                  <Select defaultValue="todas">
                    <SelectTrigger className="h-9 w-[150px] text-xs">
                      <SelectValue placeholder="Impressora" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas impressoras</SelectItem>
                      <SelectItem value="4">Impressora 4</SelectItem>
                      <SelectItem value="3">Impressora 3</SelectItem>
                      <SelectItem value="2">Impressora 2</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="tudo">
                    <SelectTrigger className="h-9 w-[140px] text-xs">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tudo">Todos status</SelectItem>
                      <SelectItem value="ok">Dentro do ideal</SelectItem>
                      <SelectItem value="warning">Acima do ideal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="rounded-xl border border-zinc-200 overflow-hidden bg-white">
                <ScrollArea className="max-h-[420px]">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-zinc-50/60 text-xs">
                        <TableHead className="w-[30%]">Arquivo</TableHead>
                        <TableHead>Impressora</TableHead>
                        <TableHead>Papel</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>CMYK médio</TableHead>
                        <TableHead className="text-right">
                          Cobertura total
                        </TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historyMock.map((item) => (
                        <TableRow key={item.id} className="text-xs">
                          <TableCell className="font-medium">
                            <div className="flex flex-col">
                              <span>{item.filename}</span>
                              <span className="text-[11px] text-zinc-500">
                                ID #{item.id.padStart(4, "0")}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{item.printer}</TableCell>
                          <TableCell>{item.paper}</TableCell>
                          <TableCell className="text-[11px]">
                            {item.date}
                          </TableCell>
                          <TableCell className="text-[11px]">
                            {item.cmyk}
                          </TableCell>
                          <TableCell className="text-right">
                            <CoverageBadge
                              value={item.totalCoverage}
                              status={item.status}
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[11px] gap-1"
                            >
                              Reabrir
                              <ArrowUpRight className="h-3 w-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          {/* Coluna lateral – Resumo */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#6D6AEB]" />
                Resumo rápido
              </CardTitle>
              <CardDescription className="text-xs">
                Panorama das análises deste período.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs">
              {/* Bloco 1 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3">
                  <p className="text-[11px] text-zinc-500">
                    Total de análises
                  </p>
                  <p className="text-2xl font-semibold leading-tight">48</p>
                  <p className="text-[11px] text-emerald-600 mt-1">
                    +12 em relação à semana passada
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3">
                  <p className="text-[11px] text-zinc-500">Arquivos únicos</p>
                  <p className="text-2xl font-semibold leading-tight">31</p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Inclui variações de prova
                  </p>
                </div>
              </div>

              {/* Bloco 2 */}
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 space-y-2">
                <p className="text-[11px] text-zinc-500">
                  Cobertura média total
                </p>
                <p className="text-lg font-semibold">42%</p>
                <p className="text-[11px] text-zinc-500">
                  Intervalo ideal recomendado para este parque de impressoras:
                  <span className="font-medium"> 25% – 55%</span>.
                </p>
              </div>

              {/* Bloco 3 */}
              <div className="space-y-2">
                <p className="text-[11px] text-zinc-500">
                  Arquivos com cobertura considerada alta
                </p>
                <ul className="space-y-2 text-[11px]">
                  <li className="flex items-center justify-between rounded-lg border border-amber-100 bg-amber-50 px-3 py-2">
                    <div>
                      <p className="font-medium text-amber-800">
                        flyer_black_friday.png
                      </p>
                      <p className="text-amber-800/80">
                        Cobertura total ~ 51% · Impressora 3
                      </p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                      Atenção
                    </Badge>
                  </li>
                  <li className="flex items-center justify-between rounded-lg border border-amber-100 bg-amber-50 px-3 py-2">
                    <div>
                      <p className="font-medium text-amber-800">
                        banner_loja_outdoor.tif
                      </p>
                      <p className="text-amber-800/80">
                        Cobertura total ~ 54% · Impressora 4
                      </p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                      Atenção
                    </Badge>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

/* ---------- COMPONENTES DE APOIO ---------- */

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

function CoverageBadge({
  value,
  status,
}: {
  value: string;
  status: "ok" | "warning";
}) {
  if (status === "warning") {
    return (
      <Badge className="bg-amber-50 text-amber-800 border-amber-200 text-[11px]">
        {value} · atenção
      </Badge>
    );
  }

  return (
    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[11px]">
      {value} · ideal
    </Badge>
  );
}
