import Image from "next/image";

export default function TestimonialCard({
  name,
  role,
  text,
  image,
}: {
  name: string;
  role: string;
  text: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 bg-white  shadow-lg hover:shadow-md transition-all duration-300 rounded-2xl p-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 border-2 border-[#6E79EE] rounded-full overflow-hidden">
          <Image src={image} alt={name} width={64} height={64} className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-800 text-lg text-left">{name}</h3>
          <p className="text-sm text-zinc-500 text-left">{role}</p>
        </div>
      </div>
      <div>
        <h4 className="text-indigo-500 font-semibold mb-2 text-left text-lg">{name}</h4>
        <p className="text-zinc-600 leading-relaxed text-md text-left">{text}</p>
      </div>
    </div>
  );
}


