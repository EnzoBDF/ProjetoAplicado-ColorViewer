import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-white shadow-[inset_0_0px_40px_rgba(0,0,0,0.15)] w-screen">
      {/* Título */}
      <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
        O que nossos <span className="text-indigo-500">clientes</span> têm a
        dizer!
      </h2>

      {/* Grid de depoimentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.name + t.image}
            name={t.name}
            role={t.role}
            text={t.text}
            image={t.image}
          />
        ))}
      </div>
    </section>
  );
}
