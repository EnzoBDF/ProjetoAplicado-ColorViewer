"use client";
import FaqSection from "@/components/FaqSection";
import FeatureCard from "@/components/FeatureCard";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden font-sans">
      {/* Fundo SVG ocupando toda a área */}
      {/* <Image
        src="/wave-haikei.svg"
        alt="Ondas coloridas"
        fill
        className="object-cover -z-10"
        priority
      /> */}

      {/* Conteúdo */}
      <main className="relative z-10 text-center text-white px-8">
        <h1 className="text-6xl font-bold drop-shadow-lg">ColorViewer</h1>
        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
          Analise e visualize cores com precisão profissional.
        </p>
        <FeatureCard/>
        <FeatureGrid/>
        <FeatureSection/>
        <Testimonials/>
        <PricingSection/>
        <FaqSection/>
      </main>
    </div>
  );
}
