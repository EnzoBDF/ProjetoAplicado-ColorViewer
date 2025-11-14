import BlobClipPath from "@/components/ui/BlobClipPath";
import BlobImage from "@/components/ui/BlobImage";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 max-w-6xl mx-auto">
      {/* Imagem em formato orgânico */}
      <Image
        src="/Rectangle 46.svg"   // caminho da sua imagem
        alt="Imagem principal"
        width={500}
        height={450}
        className="object-cover"
      />

      {/* Texto e botão */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">
          Uma nova maneira de enxergar<span className="text-indigo-500"> produtividade</span>
        </h2>
        <p className="text-sm text-zinc-500 font-semibold mb-4">
          Controle e gerencie sua gráfica como nunca 
        </p>
        <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia
          felis sit amet dapibus posuere. Vivamus accumsan vehicula dictum.
          Nullam porttitor placerat venenatis. Suspendisse sagittis lacinia
          aliquet. Morbi blandit enim a nulla porta eleifend. Vestibulum euismod
          ultricies dapibus. Cras ut diam purus.
        </p>
        <button className="bg-[#6D6AEB] hover:bg-linear-to-br from-pink-500 via-purple-500 to-cyan-400 text-white px-6 py-3 rounded-lg shadow-md transition hover:cursor-pointer">
          Entrar em contato
        </button>
      </div>
    </section>
  );
}
