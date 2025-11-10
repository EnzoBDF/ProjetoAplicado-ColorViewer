"use client";
import Image from "next/image";

export default function FeatureCard() {
  return (
    <section className="relative flex items-center justify-center py-16 px-6 bg-zinc-50 overflow-hidden">
      {/* Fundo orgânico */}
      <Image
        src="/blob-bg.svg"
        alt="Fundo orgânico colorido"
        fill
        className="object-cover opacity-60 -z-10"
      />

      {/* Card principal */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-xl rounded-3xl p-10 max-w-5xl">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Controle <span className="text-purple-600">custos</span> de maneira{" "}
            <span className="text-blue-600">fácil e organizada</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia felis sit amet dapibus posuere. Vivamus accumsan vehicula
            dictum. Suspendisse sagittis lacinia aliquet. Morbi blandit enim a
            nulla porta eleifend.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Entrar em contato
          </button>
        </div>

        {/* Blobs com imagens */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-[280px] h-[220px]">
            {/* Blob 1 */}
            <div className="absolute top-0 left-0 w-40 h-40 overflow-hidden [clip-path:url(#blob1)]">
              <Image
                src="/images/pinguins.jpg"
                alt="Pinguins"
                fill
                className="object-cover"
              />
            </div>
            {/* Blob 2 */}
            <div className="absolute bottom-6 left-24 w-32 h-32 overflow-hidden [clip-path:url(#blob2)]">
              <Image
                src="/images/cameleon.jpg"
                alt="Camaleão"
                fill
                className="object-cover"
              />
            </div>
            {/* Blob 3 */}
            <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden [clip-path:url(#blob3)]">
              <Image
                src="/images/dog.jpg"
                alt="Cachorro"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Definições dos blobs */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="blob1" clipPathUnits="objectBoundingBox">
                <path d="M0.76,0.05 C0.89,0.12,0.97,0.33,0.95,0.53 C0.93,0.73,0.83,0.92,0.64,0.97 C0.45,1,0.19,0.88,0.08,0.69 C-0.03,0.5,0.02,0.24,0.19,0.11 C0.37,-0.03,0.63,-0.02,0.76,0.05 Z" />
              </clipPath>
              <clipPath id="blob2" clipPathUnits="objectBoundingBox">
                <path d="M0.73,0.04 C0.89,0.12,0.98,0.36,0.93,0.56 C0.87,0.76,0.67,0.91,0.46,0.97 C0.26,1,0.05,0.91,0.02,0.71 C-0.02,0.51,0.17,0.29,0.36,0.15 C0.56,0.01,0.58,-0.04,0.73,0.04 Z" />
              </clipPath>
              <clipPath id="blob3" clipPathUnits="objectBoundingBox">
                <path d="M0.72,0.02 C0.91,0.12,0.99,0.34,0.95,0.55 C0.9,0.76,0.75,0.96,0.53,0.99 C0.31,1.02,0.02,0.92,0,0.71 C-0.02,0.51,0.21,0.28,0.39,0.13 C0.57,-0.02,0.53,-0.08,0.72,0.02 Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
