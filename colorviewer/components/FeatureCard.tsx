import Image from "next/image";
import BlobClipPath from "@/components/ui/BlobClipPath";
import BlobImage from "@/components/ui/BlobImage";

export default function FeatureCard() {
  return (
    <section className="relative flex items-center justify-center py-16 px-6 bg-zinc-50 overflow-hidden">
      {/* Fundo orgânico */}


      {/* Card principal */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-xl rounded-3xl p-10 max-w-5xl">
        {/* Texto */}
        <div className="flex-1 gap-4">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-left">
            Controle <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">custos</span> de maneira{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">fácil e organizada</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10 mt-8 text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia felis sit amet dapibus posuere. Vivamus accumsan vehicula dictum. Nullam porttitor placerat venenatis. Suspendisse sagittis lacinia aliquet. Morbi blandit enim a nulla porta eleifend. Vestibulum euismod ultricies dapibus. Cras ut diam purus.
          </p>
          <button className="bg-[#6D6AEB] hover:cursor-pointer text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400">
            Entrar em contato
          </button>
        </div>

        {/* Blobs com imagens */}
        <div className="relative flex-1 flex justify-center items-center">
          <Image
            src="/montagem.png"   // caminho da sua imagem
            alt="Imagem principal"
            width={1500}
            height={1700}
            
          />
        </div>
      </div>
    </section>
  );
}
