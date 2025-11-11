import BlobClipPath from "@/components/ui/BlobClipPath";
import BlobImage from "@/components/ui/BlobImage";

export default function FeatureSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 max-w-6xl mx-auto">
      {/* Imagem em formato orgânico */}
      <div className="relative w-[300px] h-[300px] flex-shrink-0">
        <BlobImage
          src="/images/lens.jpg"
          alt="Imagem principal"
          clipPathId="blobShape"
          className="absolute inset-0 w-full h-full"
        />
        <BlobClipPath
          id="blobShape"
          path="M0.86,0.07 C0.96,0.15,0.99,0.36,0.95,0.55 C0.91,0.74,0.81,0.9,0.63,0.96 C0.44,1,0.19,0.92,0.09,0.73 C-0.02,0.54,0.03,0.24,0.21,0.1 C0.39,-0.03,0.76,-0.01,0.86,0.07 Z"
        />
      </div>

      {/* Texto e botão */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">
          Lorem <span className="text-indigo-500">Ipsum</span> Dolor sit amet
        </h2>
        <p className="text-sm text-zinc-500 font-semibold mb-4">
          Lorem Ipsum Dolor sit amet
        </p>
        <p className="text-zinc-600 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia
          felis sit amet dapibus posuere. Vivamus accumsan vehicula dictum.
          Nullam porttitor placerat venenatis. Suspendisse sagittis lacinia
          aliquet. Morbi blandit enim a nulla porta eleifend. Vestibulum euismod
          ultricies dapibus. Cras ut diam purus.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Entrar em contato
        </button>
      </div>
    </section>
  );
}
