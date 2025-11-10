"use client";
import { Lock } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Segurança",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet.",
    },
    {
      title: "Confiabilidade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet.",
    },
    {
      title: "Rapidez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet.",
    },
    {
      title: "Eficiência",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-400"
          >
            {/* Ícone */}
            <div className="flex-shrink-0 bg-purple-100 text-purple-600 p-3 rounded-full">
              <Lock className="w-6 h-6" />
            </div>

            {/* Texto */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
