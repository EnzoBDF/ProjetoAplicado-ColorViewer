"use client";

import { useState } from "react";
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
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

type PlanId = "starter" | "pro" | "enterprise";

const plans: {
  id: PlanId;
  name: string;
  price: string;
  description: string;
  recommended?: boolean;
  features: string[];
}[] = [
  {
    id: "starter",
    name: "Starter",
    price: "R$ 0",
    description: "Ideal para testes, estudantes e pequenos projetos.",
    features: [
      "Até 30 análises por mês",
      "Upload de imagens (PNG/JPG)",
      "Resultados básicos de CMYK",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "R$ 59",
    description: "Perfeito para gráficas pequenas e equipes internas.",
    recommended: true,
    features: [
      "Análises ilimitadas",
      "Suporte a PDFs multi-página",
      "Histórico completo e Analytics",
      "Perfis de impressora personalizados",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sob consulta",
    description: "Para parques de impressão maiores e integrações avançadas.",
    features: [
      "Onboarding com time dedicado",
      "Integração via API com sistemas internos",
      "Suporte prioritário",
    ],
  },
];

export default function ChoosePlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("pro");

  const plan = plans.find((p) => p.id === selectedPlan)!;

  return (
    <main className="min-h-[calc(100vh-120px)] w-full flex items-center justify-center px-6 py-12 bg-[url('/waterfall6.png')]  bg-no-repeat
  bg-top">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl bg-white/80 backdrop-blur border border-zinc-200">
        <CardHeader className="space-y-4">
          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
            <span className="text-zinc-500">Passo 1</span>
            <span className="h-[1px] w-6 bg-zinc-200" />
            <span className="font-medium text-[#6D6AEB]">Passo 2</span>
            <span className="text-zinc-500">· Escolher plano</span>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <CardTitle className="text-2xl md:text-3xl font-semibold text-[#6D6AEB]">
              Escolha o plano ideal para você
            </CardTitle>
            <CardDescription className="text-xs md:text-sm text-zinc-500 max-w-xl mx-auto">
              Você pode mudar de plano a qualquer momento nas configurações da conta.
              Comece com o que faz mais sentido hoje.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as PlanId)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {plans.map((p) => (
              <label
                key={p.id}
                className={`
                  relative flex flex-col rounded-2xl border bg-white px-4 py-4 cursor-pointer transition-all
                  ${
                    p.id === selectedPlan
                      ? "border-transparent shadow-md [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(135deg,#ec4899,#6366f1,#06b6d4)_border-box]"
                      : "border-zinc-200 hover:border-[#6D6AEB]/70 hover:shadow-sm"
                  }
                `}
              >
                {p.recommended && (
                  <Badge className="absolute -top-2 right-3 bg-[#6D6AEB] text-white text-[10px] px-2 py-0.5 rounded-full">
                    Mais escolhido
                  </Badge>
                )}

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-900">
                      {p.name}
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      {p.description}
                    </span>
                  </div>

                  <RadioGroupItem
                    value={p.id}
                    className="mt-1"
                    aria-label={`Selecionar plano ${p.name}`}
                  />
                </div>

                <div className="mt-2 mb-3">
                  <span className="text-xl font-semibold text-[#6D6AEB]">
                    {p.price}
                  </span>
                  {p.id !== "enterprise" && (
                    <span className="text-xs text-zinc-500"> / mês</span>
                  )}
                </div>

                <ul className="space-y-1 text-[11px] text-zinc-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-1">
                      <span className="mt-[3px] h-[4px] w-[4px] rounded-full bg-[#6D6AEB]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </label>
            ))}
          </RadioGroup>

          <Separator />

          {/* Resumo do plano selecionado */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 text-xs md:text-sm">
              <p className="text-zinc-500">Plano selecionado</p>
              <p className="font-semibold text-zinc-900">
                {plan.name}{" "}
                <span className="font-normal text-zinc-500">
                  {plan.id === "enterprise"
                    ? "· valor sob consulta"
                    : `· ${plan.price}${plan.id !== "enterprise" ? "/mês" : ""}`}
                </span>
              </p>
              <p className="text-[11px] text-zinc-500 max-w-md">
                {plan.id === "starter" &&
                  "Recomendado para testar o ColorViewer sem compromisso."}
                {plan.id === "pro" &&
                  "Equilíbrio entre custo e benefício para uso recorrente em gráfica ou time interno."}
                {plan.id === "enterprise" &&
                  "Voltado para operações maiores, com integrações e suporte dedicado."}
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-2 w-full md:w-auto">
              <Button className="w-full md:w-auto bg-[#6D6AEB] hover:bg-[#6c6aebcb] text-white">
                Confirmar plano e finalizar
              </Button>
              <Button
                variant="ghost"
                className="w-full md:w-auto text-xs text-zinc-500"
              >
                Escolher depois (começar no plano Starter)
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-2">
          <p className="text-[11px] text-zinc-500 text-center max-w-md">
            Não se preocupe: você só será cobrado após validar seu email e
            confirmar o método de pagamento (que será configurado em outra etapa).
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
