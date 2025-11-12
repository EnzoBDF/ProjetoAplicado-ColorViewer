"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-120px)] w-full flex items-center justify-center px-6 py-12 bg-[url('/waterfall6.png')]  bg-no-repeat
  bg-top

  ">
      <Card className="w-[380px] shadow-xl rounded-2xl bg-white backdrop-blur border">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-zinc-800">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="mb-2 text-[#6D6AEB] ml-1">Email</Label>
            <Input id="email" type="email" placeholder="Digite seu email" />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="mb-2 text-[#6D6AEB] ml-1">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full bg-[#6D6AEB] hover:cursor-pointer hover:bg-[#6c6aebcb] transition text-white">
            Entrar
          </Button>

          <div className="flex items-center gap-2 w-full">
            <Separator className="flex-1" />
            <span className="text-xs text-zinc-500">ou</span>
            <Separator className="flex-1" />
          </div>

          <div className="rounded-lg p-0.5 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 transition-shadow hover:shadow-[0_0_22px_rgba(109,106,235,0.25)] w-full">
            <Button className="w-full rounded-[10px] border-transparent bg-white text-zinc-700 hover:bg-white hover:cursor-pointer">
              Entrar com conta Google

            </Button>

          </div>
          <div className="flex items-center gap-2 w-full flex-col">
            <Separator className="flex-1" />
            <span className="text-xs text-zinc-500">Não tem uma conta? Cadastre-se aqui!</span>
            <Button variant="ghost" asChild className="text-[#6D6AEB] w-full border-2 hover:text-[#6D6AEB]">
  <Link href="/register">Criar conta</Link>
</Button>
            <Separator className="flex-1" />
           
          </div>


          {/* Exemplo de alerta (opcional) */}
          {/*  <Alert variant="destructive">
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>Email ou senha incorretos.</AlertDescription>
          </Alert> */}
        </CardFooter>
      </Card>
    </main>
  );
}
