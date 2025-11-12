import { Lock } from "lucide-react";

export default function FeatureItem({
  title,
  description,
  icon = "lock",
}: {
  title: string;
  description: string;
  icon?: "lock";
}) {
  return (
    <div className="flex items-start text-left gap-4 p-10 border border-[#6D6AEB] shadow-lg rounded-2xl  hover:shadow-md transition-all duration-300 hover:border-purple-400">
      <div className="shrink-0 bg-[purple-100] text-[#6D6AEB] p-3 rounded-full">
        {icon === "lock" ? <Lock className="w-6 h-6" /> : null}
      </div>
      <div>
        <h3 className="font-semibold text-[#6D6AEB] mb-1 text-xl">{title}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}


