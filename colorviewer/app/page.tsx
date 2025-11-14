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

      <main className="relative z-10 text-center text-white px-8">
      <section
        className="
          w-full
          flex flex-col items-center justify-center text-center
          py-24 px-6
          bg-[url('/waterfall6.png')]  bg-no-repeat
          bg-top
          h-[70vh]
        "
      >
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">ColorViewer</h1>

        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto text-white">
          Analise e visualize cores com precisão profissional.
        </p>
      </section>
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
