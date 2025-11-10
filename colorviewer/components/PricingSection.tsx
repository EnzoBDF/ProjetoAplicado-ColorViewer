"use client";

export default function PricingSection() {
  const plans = [
    {
      price: "39,00",
      label: "Plano Standard",
      description:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      highlight: false,
    },
    {
      price: "59,00",
      label: "Plano Standard",
      description:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      highlight: true, // plano do meio destacado
    },
    {
      price: "39,00",
      label: "Plano Standard",
      description:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      highlight: false,
    },
  ];

  return (
    <section className="relative py-24 px-6 text-center bg-white overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-90 -z-10" />

      {/* Conteúdo */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-14">
        Pensado para o seu negócio e suas necessidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-between p-8 rounded-2xl shadow-xl bg-white ${
              plan.highlight
                ? "border-4 border-indigo-500 scale-105"
                : "border border-zinc-200"
            } transition-transform duration-300 hover:scale-105`}
          >
            {/* Banner de destaque */}
            {plan.highlight && (
              <span className="absolute -top-3 right-4 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-b-md shadow-md">
                Melhor oferta
              </span>
            )}

            {/* Preço */}
            <div className="text-5xl font-bold text-indigo-600 mb-2">
              {plan.price}
              <span className="text-lg align-top">/mês</span>
            </div>

            {/* Nome do plano */}
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">
              {plan.label}
            </h3>

            {/* Descrição */}
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              {plan.description}
            </p>

            {/* Botão */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Assinar já!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
