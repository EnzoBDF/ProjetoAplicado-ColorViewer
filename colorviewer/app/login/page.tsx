"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-120px)] w-full flex items-center justify-center px-6 py-12">
      <Card className="w-[380px] shadow-xl rounded-2xl bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-zinc-800">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input id="email" type="email" placeholder="Digite seu email" />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="mb-2">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full bg-[#6D6AEB] hover:bg-indigo-600 transition text-white">
            Entrar
          </Button>

          <div className="flex items-center gap-2 w-full">
            <Separator className="flex-1" />
            <span className="text-xs text-zinc-500">ou</span>
            <Separator className="flex-1" />
          </div>

          <div className="rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-shadow hover:shadow-[0_0_22px_rgba(109,106,235,0.25)] w-full">
  <Button className="w-full rounded-[10px] border-transparent bg-white text-zinc-700 hover:bg-white">
      Entrar com conta Google

  </Button>
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
