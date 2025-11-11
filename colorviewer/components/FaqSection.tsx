"use client";

import { Accordion } from "@/components/ui/accordion";
import FaqItem from "@/components/ui/FaqItem";
import { faqs } from "@/content/faq";

export default function FaqSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-12">
        Perguntas Frequentes
      </h2>

      <div className="w-full max-w-2xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f) => (
            <FaqItem key={f.id} id={f.id} question={f.question} answer={f.answer} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
