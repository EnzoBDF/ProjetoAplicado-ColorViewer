"use client";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet dapibus posuere. Vivamus accumsan vehicula dictum. Nullam porttitor placerat.",
      image: "/images/avatar1.jpg",
    },
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet dapibus posuere. Vivamus accumsan vehicula dictum. Nullam porttitor placerat.",
      image: "/images/avatar2.jpg",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-white">
      {/* Título */}
      <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
        O que nossos <span className="text-indigo-500">clientes</span> têm a
        dizer!
      </h2>

      {/* Grid de depoimentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-8"
          >
            {/* Cabeçalho */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-800 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Corpo do depoimento */}
            <div>
              <h4 className="text-indigo-500 font-semibold mb-2">
                {testimonial.name}
              </h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
