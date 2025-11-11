import FeatureItem from "@/components/ui/FeatureItem";
import { features } from "@/content/features";

export default function FeatureGrid() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
