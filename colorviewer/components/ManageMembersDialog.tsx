"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type MemberRole = "admin" | "operador" | "viewer";
type MemberStatus = "ativo" | "pendente";

export type WorkspaceMember = {
  id: number | string;
  name: string;
  email: string;
  role: MemberRole;
  status: MemberStatus;
};

type ManageMembersDialogProps = {
  triggerLabel?: string;
  members: WorkspaceMember[];
  onInvite?: (data: { email: string; role: MemberRole }) => void;
  onRoleChange?: (id: WorkspaceMember["id"], role: MemberRole) => void;
  onRemove?: (id: WorkspaceMember["id"]) => void;
};

export function ManageMembersDialog({
  triggerLabel = "Gerenciar membros",
  members,
  onInvite,
  onRoleChange,
  onRemove,
}: ManageMembersDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          {triggerLabel}
        </Button>
      </DialogTrigger>

      {/* 
        w-[95vw] garante que nunca passe da largura da tela,
        sm:max-w-[640px] deixa o modal em um tamanho confortável,
        overflow-hidden corta qualquer sobra de sombra/scroll.
      */}
      <DialogContent className="w-[95vw] sm:max-w-[640px] overflow-hidden">
        {/* Wrapper com padding único. Nada encosta direto na borda. */}
        <div className="p-2 space-y-4">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-lg text-[#6D6AEB]">Membros do workspace</DialogTitle>
            <DialogDescription className="text-xs">
              Controle quem pode acessar o ColorViewer neste workspace e defina
              funções.
            </DialogDescription>
          </DialogHeader>

          {/* CONVIDAR NOVO MEMBRO */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-medium text-[zinc-700]">
              Convidar novo membro
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1.1fr_auto] gap-3 items-center">
              <Input
                type="email"
                placeholder="email@empresa.com"
                className="h-10 text-xs"
              />

              <Select defaultValue="operador">
                <SelectTrigger className="h-10 text-xs">
                  <SelectValue placeholder="Função" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="operador">Operador</SelectItem>
                  <SelectItem value="viewer">Visualizador</SelectItem>
                </SelectContent>
              </Select>

              <Button
                size="sm"
                className="text-xs h-10 px-4 bg-[#6D6AEB] hover:bg-[#6c6aebcb]"
                onClick={() => {
                  // depois você pega valores reais (email/role) e chama onInvite?.(...)
                  onInvite?.({ email: "", role: "operador" });
                }}
              >
                Enviar convite
              </Button>
            </div>

            <p className="text-[11px] text-zinc-500">
              O convidado receberá um email com instruções para criar a conta e
              entrar no workspace.
            </p>
          </div>

          <Separator className="my-2" />

          {/* MEMBROS ATUAIS */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-zinc-700">
              Membros atuais
            </p>

            {/* 
              ScrollArea fica dentro do padding do modal,
              então os cards sempre terão “respiro” lateral.
            */}
            <ScrollArea className="max-h-64">
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
                  >
                    {/* bloco à esquerda */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="text-[11px]">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-xs font-semibold text-zinc-800">
                          {member.name}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          {member.email}
                        </p>
                      </div>
                    </div>

                    {/* bloco à direita */}
                    <div className="flex items-center gap-2">
                      <Select
                        defaultValue={member.role}
                        onValueChange={(value) =>
                          onRoleChange?.(member.id, value as MemberRole)
                        }
                      >
                        <SelectTrigger className="h-8 w-[120px] text-[11px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="operador">Operador</SelectItem>
                          <SelectItem value="viewer">Visualizador</SelectItem>
                        </SelectContent>
                      </Select>

                      <Badge
                        variant="outline"
                        className={
                          "text-[10px] px-2 py-0.5 rounded-full " +
                          (member.status === "pendente"
                            ? "border-amber-300 text-amber-700 bg-amber-50"
                            : "border-emerald-300 text-emerald-700 bg-emerald-50")
                        }
                      >
                        {member.status === "pendente"
                          ? "Convite pendente"
                          : "Ativo"}
                      </Badge>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[11px] text-zinc-500 hover:text-rose-600 px-2"
                        onClick={() => onRemove?.(member.id)}
                      >
                        Remover
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
