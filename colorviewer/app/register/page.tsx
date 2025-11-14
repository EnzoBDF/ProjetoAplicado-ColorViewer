"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

export default function Register() {
  return (
    <main className="min-h-[calc(100vh-120px)] w-full flex items-center justify-center px-6 py-12 bg-[url('/waterfall6.png')]  bg-no-repeat
  bg-top">
      <Card className="w-[400px] shadow-xl rounded-2xl bg-white backdrop-blur">
        <CardHeader className="space-y-3">
          {/* Stepper simples */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
            <span className="font-medium text-[#6D6AEB]">Passo 1</span>
            <span>de 2</span>
            <span className="h-px w-6 bg-zinc-200" />
            <span>Escolher plano vem em seguida</span>
          </div>

          <div className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold  text-[#6D6AEB]">
              Criar conta
            </CardTitle>
            <CardDescription className="text-xs text-zinc-500">
              Primeiro, criamos sua conta. No próximo passo você escolhe o plano
              ideal para o seu uso.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="mb-1 text-[#6D6AEB]" >
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="focus:border-[#6D6AEB] focus:ring-[#6D6AEB] focus:ring-1 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="mb-1 text-[#6D6AEB]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@exemplo.com"
              className="focus:border-[#6D6AEB] focus:ring-[#6D6AEB] focus:ring-1 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="mb-1 text-[#6D6AEB]">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="focus:border-[#6D6AEB] focus:ring-[#6D6AEB] focus:ring-1 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="confirmPassword" className="mb-1 text-[#6D6AEB]">
              Confirmar senha
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Repita sua senha"
              className="focus:border-[#6D6AEB] focus:ring-[#6D6AEB] focus:ring-1 transition-all"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          {/* Aqui depois você pluga o submit real e redireciona para /pricing ou /plans */}
          <Button className="w-full bg-[#6D6AEB] hover:cursor-pointer hover:bg-[#6c6aebcb] transition text-white">
            Continuar para escolher plano
          </Button>

          <p className="text-[11px] text-zinc-500 text-center -mt-2">
            Você poderá alterar o plano a qualquer momento nas configurações da conta.
          </p>

          <div className="flex items-center gap-2 w-full">
            <Separator className="flex-1" />
            <span className="text-xs text-zinc-500">ou</span>
            <Separator className="flex-1" />
          </div>

          {/* Botão com borda gradiente (Google) */}
          <div className="rounded-lg p-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-shadow hover:shadow-[0_0_22px_rgba(109,106,235,0.25)] w-full">
            <Button className="w-full rounded-[10px] border-transparent bg-white text-zinc-700 hover:bg-white hover:cursor-pointer flex items-center justify-center gap-2">
            <GoogleIcon className="h-5 w-5"/>
              Continuar com Google
            </Button>
          </div>

          {/* Link para login */}
          <div className="flex flex-col items-center gap-1 text-xs text-zinc-600 mt-1">
            <span>Já tem uma conta?</span>
            <Button
              variant="link"
              asChild
              className="p-0 text-[#6D6AEB] hover:text-[#5b57d6] text-xs"
            >
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
