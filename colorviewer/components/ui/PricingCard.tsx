export default function PricingCard({
  price,
  label,
  description,
  highlight,
}: {
  price: string;
  label: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 ${highlight ? "scale-105" : ""
        }`}
    >
      {/* 🌈 Wrapper da borda gradiente */}
      <div
        className={`rounded-2xl p-[2px] ${highlight
            ? "bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400"
            : "bg-zinc-200"
          }`}
      >
        {/* 🧱 Card interno */}
        <div className="flex flex-col items-center justify-between bg-white rounded-2xl p-8 h-full">
          {highlight && (
            <span className="absolute -top-3 right-4 bg-[#6D6AEB] text-white text-xs font-semibold px-3 py-1 rounded-b-md shadow-md">
              Melhor oferta
            </span>
          )}

          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mb-2">
            {price}
            <span className="text-lg align-top text-zinc-500">/mês</span>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">{label}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8 text-center">
            {description}
          </p>

          <button
            className="bg-[#6D6AEB] hover:bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out"
          >
            Assinar já!
          </button>

        </div>
      </div>
    </div>
  );
}

