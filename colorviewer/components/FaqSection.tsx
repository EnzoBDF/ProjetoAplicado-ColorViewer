"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-12">
        Perguntas Frequentes
      </h2>

      <div className="w-full max-w-2xl">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Pergunta 1 */}
          <AccordionItem
            value="item-1"
            className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="text-base font-medium px-6 py-4 rounded-2xl hover:no-underline transition-all data-[state=open]:text-indigo-600 data-[state=open]:border-none">
              Lorem ipsum dolor sit amet.
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-600 text-sm leading-relaxed border-t border-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum eget metus faucibus sagittis. Vivamus quis leo vel magna
              gravida tincidunt. Duis auctor felis turpis, at placerat sem porta
              ut. Nullam faucibus, libero ac condimentum ultricies, urna ex
              feugiat tellus, ultricies ultricies eros magna sit amet libero.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 2 */}
          <AccordionItem
            value="item-2"
            className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="text-base font-medium px-6 py-4 rounded-2xl hover:no-underline transition-all data-[state=open]:text-indigo-600">
              Lorem ipsum dolor sit amet.
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-600 text-sm leading-relaxed border-t border-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum eget metus faucibus sagittis. Vivamus quis leo vel magna
              gravida tincidunt.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 3 */}
          <AccordionItem
            value="item-3"
            className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="text-base font-medium px-6 py-4 rounded-2xl hover:no-underline transition-all data-[state=open]:text-indigo-600">
              Lorem ipsum dolor sit amet.
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-600 text-sm leading-relaxed border-t border-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet ligula non metus rhoncus, nec malesuada libero porttitor.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
