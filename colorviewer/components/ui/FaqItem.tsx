import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqItem({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  return (
    <AccordionItem value={id} className=" border border-gray-200 shadow-sm overflow-hidden p-2">
      <AccordionTrigger className="text-lg text-black font-medium px-6 py-6 hover:no-underline transition-all data-[state=open]:text-indigo-600 data-[state=open]:border-none">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-8 py-6 text-zinc-600 text-sm leading-relaxed border-t border-gray-100 text-left">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}


