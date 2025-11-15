import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion";
  import { Lightbulb, Info } from "lucide-react";
  import { Button } from "./ui/button";
  
  export function ColorimetryQuickGuideDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Lightbulb className="h-4 w-4 text-[#6D6AEB]" />
            Ver guia rápido
          </Button>
        </DialogTrigger>
  
        <DialogContent className="w-[95vw] sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Guia rápido de colorimetria
            </DialogTitle>
            <DialogDescription className="text-xs">
              Um passo a passo resumido para você entender como usar essa tela e
              como o ColorViewer calcula a cobertura de tinta.
            </DialogDescription>
          </DialogHeader>
  
          <div className="mt-2 space-y-4 text-xs text-zinc-700">
            {/* Resumo em 3 passos */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 space-y-2">
              <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-wide">
                Fluxo básico em 3 passos
              </p>
              <ol className="space-y-1.5 list-decimal list-inside">
                <li>
                  <span className="font-medium">Envie a imagem</span> na área de
                  upload central (JPG, PNG ou PDF).
                </li>
                <li>
                  <span className="font-medium">Escolha a impressora e o papel</span>{" "}
                  na coluna da esquerda, usando os perfis já cadastrados.
                </li>
                <li>
                  Clique em <span className="font-medium">“Processar imagem”</span>{" "}
                  para ver a cobertura CMYK estimada e salvar no histórico.
                </li>
              </ol>
            </div>
  
            {/* Accordion com detalhes */}
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="upload">
                <AccordionTrigger className="text-xs ml-2">
                  1. Como preparar a imagem para análise?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-zinc-600 space-y-1.5 m-2">
                  <p>
                    Sempre que possível, use arquivos na resolução final de
                    impressão (ex.: 300 dpi) e no tamanho real de saída.
                  </p>
                  <p>
                    Se o arquivo estiver em RGB, o ColorViewer converte para CMYK
                    usando o perfil vinculado à impressora selecionada.
                  </p>
                  <p>
                    PDFs com múltiplas páginas serão analisados página a página em
                    versões futuras — por enquanto considere enviar a página alvo
                    separadamente.
                  </p>
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="printer-paper">
                <AccordionTrigger className=" text-xs ml-2">
                  2. Impressora, papel e impacto no cálculo
                </AccordionTrigger>
                <AccordionContent className="text-xs text-zinc-600 space-y-1.5 m-2">
                  <p>
                    A combinação <span className="font-medium">Impressora + Papel</span>{" "}
                    determina qual perfil de cor e quais rendimentos de cartucho
                    serão usados no cálculo de custo.
                  </p>
                  <p>
                    Perfis diferentes podem resultar em pequenas variações de
                    cobertura, especialmente em áreas de sombra e saturações altas.
                  </p>
                  <p>
                    Use sempre a impressora/papel reais para que o custo por
                    página fique o mais próximo possível da prática.
                  </p>
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="results">
                <AccordionTrigger className="text-xs ml-2">
                  3. Como interpretar os percentuais de CMYK?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-zinc-600 space-y-1.5 m-2">
                  <p>
                    Cada cartão (C, M, Y, K) mostra a{" "}
                    <span className="font-medium">cobertura média</span> da página
                    inteira para aquele canal.
                  </p>
                  <p>
                    Valores médios entre <span className="font-medium">5% e 25%</span>{" "}
                    costumam ser considerados saudáveis para tiragens longas, mas
                    isso varia conforme o equipamento.
                  </p>
                  <p>
                    A barra “Cobertura média total” resume o esforço de tinta da
                    página como um todo, útil para comparar versões de um mesmo
                    layout.
                  </p>
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="history">
                <AccordionTrigger className="text-xs ml-2">
                  4. Como usar o histórico a favor do orçamento?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-zinc-600 space-y-1.5 m-2">
                  <p>
                    O histórico recente, logo abaixo da tela, guarda os últimos
                    arquivos analisados com seus percentuais CMYK.
                  </p>
                  <p>
                    Você pode reabrir um job para comparar versões e justificar
                    ajustes de layout ou de orçamento com base em dados de tinta.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
            {/* Dica final */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2 flex gap-2 items-start">
              <Info className="h-4 w-4 text-[#6D6AEB] mt-[2px]" />
              <p className="text-[11px] text-indigo-900">
                Conforme você integrar o backend, essa tela poderá exibir também{" "}
                <span className="font-semibold">custo por página</span> com base
                no preço dos cartuchos e rendimento configurados em{" "}
                <span className="font-semibold">Impressoras &gt; Configuração</span>.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  