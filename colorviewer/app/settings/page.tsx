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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import {
  Palette,
  Printer,
  History,
  FileText,
  Settings2,
  User,
  Building2,
  Globe,
  Bell,
  Moon,
  Trash2,
  ShieldCheck,
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

export default function SettingsPage() {
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
          <SidebarItem icon={FileText} label="Analytics" />
          <SidebarItem icon={Settings2} label="Configurações" active />
        </nav>

        <div className="px-4 py-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Plano Pro</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ShieldCheck className="h-4 w-4" />
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
                Configurações
              </h1>
              <p className="text-sm text-zinc-500">
                Ajuste seu perfil, workspace, preferências e privacidade.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-[11px]">
                Workspace: Gráfica Exemplo
              </Badge>
              <Button variant="outline" size="sm">
                Ver plano e faturamento
              </Button>
            </div>
          </div>

          <Separator className="mt-2" />
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6 items-start">
          {/* Coluna esquerda: Perfil + Workspace */}
          <div className="space-y-6">
            {/* Perfil */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <User className="h-4 w-4 text-[#6D6AEB]" />
                    Perfil
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Esses dados são usados para identificação no app e nas
                    comunicações.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">
                      Nome completo
                    </p>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">Cargo</p>
                    <Input placeholder="Ex.: Designer, Operador de pré-impressão" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">Email</p>
                    <Input type="email" placeholder="voce@exemplo.com" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">
                      Telefone (opcional)
                    </p>
                    <Input placeholder="(xx) xxxxx-xxxx" />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-zinc-600">
                    Sobre você (opcional)
                  </p>
                  <Textarea
                    placeholder="Conte rapidamente como você utiliza colorimetria no dia a dia."
                    className="resize-none h-20 text-xs"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>Essas informações não são compartilhadas publicamente.</span>
                <Button size="sm" className="text-xs bg-[#6D6AEB] hover:bg-[#6c6aebcb]">
                  Salvar perfil
                </Button>
              </CardFooter>
            </Card>

            {/* Workspace */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#6D6AEB]" />
                  Workspace
                </CardTitle>
                <CardDescription className="text-xs">
                  Informações do ambiente compartilhado com sua equipe.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-sm">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-zinc-600">
                    Nome do workspace
                  </p>
                  <Input defaultValue="Gráfica Exemplo" />
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-zinc-600">
                    Descrição (opcional)
                  </p>
                  <Textarea
                    placeholder="Ex.: Setor de pré-impressão da Gráfica Exemplo."
                    className="resize-none h-16 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">
                      Fuso horário
                    </p>
                    <Select defaultValue="america_sp">
                      <SelectTrigger className="h-9 text-xs">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america_sp">
                          América/São Paulo (GMT-3)
                        </SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-zinc-600">Idioma</p>
                    <Select defaultValue="pt-BR">
                      <SelectTrigger className="h-9 text-xs">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                        <SelectItem value="en-US">Inglês</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>
                  Alterações aqui afetam toda a equipe conectada a este workspace.
                </span>
                <Button variant="outline" size="sm" className="text-xs">
                  Gerenciar membros
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Coluna direita: Preferências + Notificações + Segurança */}
          <div className="space-y-6">
            {/* Preferências */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#6D6AEB]" />
                  Preferências
                </CardTitle>
                <CardDescription className="text-xs">
                  Personalize o tema e o comportamento da interface.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium text-zinc-700 flex items-center gap-1">
                      <Moon className="h-3 w-3 text-zinc-500" />
                      Tema escuro automático
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Alternar entre claro/escuro com base nas preferências do sistema.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium text-zinc-700">Lembrar último workspace</p>
                    <p className="text-[11px] text-zinc-500">
                      Ao fazer login, abrir automaticamente o último workspace usado.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Notificações */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[#6D6AEB]" />
                  Notificações
                </CardTitle>
                <CardDescription className="text-xs">
                  Escolha o que você deseja receber por email.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium text-zinc-700">
                      Alertas de cobertura alta
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Receber email quando um arquivo ultrapassar a faixa ideal.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium text-zinc-700">
                      Resumo semanal de uso
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Enviar um resumo com os principais indicadores de consumo.
                    </p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium text-zinc-700">
                      Avisos de manutenção de impressoras
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Notificações sobre status de impressoras e filas.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Segurança / Danger zone */}
            <Card className="shadow-sm border-zinc-200 bg-white/95">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#6D6AEB]" />
                  Segurança
                </CardTitle>
                <CardDescription className="text-xs">
                  Ações que impactam o acesso à sua conta e workspace.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-xs">
                <div className="space-y-1">
                  <p className="font-medium text-zinc-700">
                    Sessões ativas
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    Recomendado encerrar sessões em dispositivos que você não reconhece.
                  </p>
                  <Button variant="outline" size="sm" className="mt-1 text-xs">
                    Encerrar sessões em outros dispositivos
                  </Button>
                </div>

                <Separator />

                <div className="space-y-1">
                  <p className="font-medium text-zinc-700 flex items-center gap-1 text-rose-700">
                    <Trash2 className="h-3 w-3" />
                    Excluir conta
                  </p>
                  <p className="text-[11px] text-rose-600">
                    Esta ação é irreversível. Todos os dados associados ao seu usuário
                    poderão ser removidos de forma permanente.
                  </p>
                  <Button variant="outline" size="sm" className="mt-1 text-[11px] border-rose-300 text-rose-700 hover:bg-rose-50">
                    Iniciar processo de exclusão
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
