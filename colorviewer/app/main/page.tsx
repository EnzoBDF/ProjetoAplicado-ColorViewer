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
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ColorimetryQuickGuideDialog } from "@/components/ColorimetryQuickGuideDialog";
import Sidebar from "@/components/layout/Sidebar";

import {
  Palette,
  Printer,
  History,
  FileText,
  UploadCloud,
  ImageIcon,
  Settings2,
} from "lucide-react";

export default function MainColorimetryPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] bg-zinc-50 text-zinc-900">
      {/* SIDEBAR */}
      <Sidebar current="colorimetria" />

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 px-6 py-6 md:px-10 md:py-8 space-y-6">
        {/* Header da página */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Colorimetria
              </h1>
              <p className="text-sm text-zinc-500">
                Envie uma imagem, escolha a impressora e o papel, e veja o
                consumo estimado de tinta CMYK.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Sessão ativa
              </Badge>
              <ColorimetryQuickGuideDialog />

            </div>
          </div>

          <Separator className="mt-2" />
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.9fr)] gap-6 items-start">
          {/* Coluna esquerda – Configurações */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Settings2 className="h-4 w-4 text-[#6D6AEB]" />
                Configurações de saída
              </CardTitle>
              <CardDescription className="text-xs">
                Defina a impressora, o tipo de papel e presets de análise.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-medium text-zinc-600">
                  Impressora
                </span>
                <Select defaultValue="4">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a impressora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">Impressora 4 (CMYK)</SelectItem>
                    <SelectItem value="3">Impressora 3</SelectItem>
                    <SelectItem value="2">Impressora 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-zinc-600">
                  Tipo de papel
                </span>
                <Select defaultValue="couche">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o papel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="couche">Papel Couchê</SelectItem>
                    <SelectItem value="offset">Papel Offset</SelectItem>
                    <SelectItem value="reciclado">Papel Reciclado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-zinc-600">
                  Preset de análise
                </span>
                <Tabs defaultValue="padrao" className="w-full">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="padrao" className="text-xs">
                      Padrão
                    </TabsTrigger>
                    <TabsTrigger value="economico" className="text-xs">
                      Econômico
                    </TabsTrigger>
                    <TabsTrigger value="prova" className="text-xs">
                      Prova
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 text-[11px] text-zinc-500">
              <p>
                Dica: altere apenas um parâmetro por vez para entender o impacto
                no consumo.
              </p>
            </CardFooter>
          </Card>

          {/* Coluna central – Upload / Preview */}
          <Card className="shadow-md border-zinc-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-[#6D6AEB]" />
                Imagem para análise
              </CardTitle>
              <CardDescription className="text-xs">
                Arraste uma imagem ou faça upload. Formatos suportados:
                JPG/PNG/PDF.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Área de upload */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/70 hover:bg-zinc-50 transition flex flex-col items-center justify-center h-64 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border-[3px] border-transparent  [mask-composite:exclude]" />
                  <UploadCloud className="h-9 w-9 text-[#6D6AEB] mb-2 relative z-10" />
                  <p className="text-sm font-medium relative z-10">
                    Solte a imagem aqui
                  </p>
                  <p className="text-xs text-zinc-500 relative z-10">
                    ou clique para selecionar do seu computador
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <UploadCloud className="h-4 w-4" />
                    Upload
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#6D6AEB] hover:bg-indigo-600 gap-2"
                  >
                    <Palette className="h-4 w-4" />
                    Processar imagem
                  </Button>
                </div>
              </div>

              {/* Última análise / detalhes rápidos */}
              <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-3 flex items-center justify-between text-xs">
                <div className="flex flex-col">
                  <span className="text-zinc-500">Última análise</span>
                  <span className="font-medium text-zinc-800">
                    capa_catalogo_final.png
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[11px] text-zinc-500">
                      CMYK médio
                    </span>
                    <p className="text-sm font-semibold">C 23 · M 48 · Y 12 · K 5</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Reprocessar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coluna direita – Resultado CMYK */}
          <Card className="shadow-sm border-zinc-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Palette className="h-4 w-4 text-[#6D6AEB]" />
                Resultado CMYK
              </CardTitle>
              <CardDescription className="text-xs">
                Visualize a cobertura estimada de tinta por canal.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <CmykCard label="Cyan" value={0} className="bg-cyan-500" />
                <CmykCard label="Magenta" value={0} className="bg-pink-500" />
                <CmykCard label="Yellow" value={0} className="bg-yellow-400" textClass="text-zinc-900" />
                <CmykCard label="Black" value={0} className="bg-zinc-900" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-zinc-600">
                  Cobertura média total
                </span>
                <Progress value={0} className="h-2" />
                <p className="text-[11px] text-zinc-500">
                  Quando a imagem for processada, a barra exibirá a cobertura
                  total de tinta considerando o perfil selecionado.
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button variant="outline" size="sm" className="w-full justify-center gap-2">
                <History className="h-4 w-4" />
                Acessar histórico de análises
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Área inferior – Histórico rápido (exemplo) */}
        <section className="hidden xl:block">
          <Card className="shadow-sm border-zinc-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm">Histórico recente</CardTitle>
                <CardDescription className="text-xs">
                  Últimos arquivos processados neste workspace.
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Ver tudo
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32">
                <div className="space-y-2 text-xs">
                  {["flyer_promocional.pdf", "banner_loja.png", "capa_catalogo_final.png"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-lg border border-zinc-100 bg-white px-3 py-2"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-800">
                            {item}
                          </span>
                          <span className="text-[11px] text-zinc-500">
                            C 21 · M 40 · Y 9 · K 3 · Papel Couchê · Impressora 4
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[11px]">
                          Reabrir
                        </Button>
                      </div>
                    )
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
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

type CmykCardProps = {
  label: string;
  value: number;
  className?: string;
  textClass?: string;
};

function CmykCard({ label, value, className, textClass }: CmykCardProps) {
  return (
    <div
      className={`rounded-xl px-3 py-3 text-white shadow-sm flex flex-col justify-between ${className}`}
    >
      <span className={`text-xs font-medium ${textClass ?? ""}`}>{label}</span>
      <p className={`text-2xl font-semibold leading-none ${textClass ?? ""}`}>
        {value}%
      </p>
    </div>
  );
}
