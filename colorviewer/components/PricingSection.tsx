import PricingCard from "@/components/ui/PricingCard";
import { plans } from "@/content/pricing";

export default function PricingSection() {
  return (
    <section className="relative py-24 px-6 text-center bg-white overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-90 -z-10" />

      {/* Conteúdo */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-14">
        Pensado para o seu negócio e suas necessidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.label + plan.price}
            price={plan.price}
            label={plan.label}
            description={plan.description}
            highlight={plan.highlight}
          />
        ))}
      </div>
    </section>
  );
}
