export default function SectionHeading({
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
        {title}{" "}
        {highlight ? <span className="text-indigo-500">{highlight}</span> : null}
      </h2>
      {subtitle ? (
        <p className="text-sm text-zinc-500 font-semibold mt-2">{subtitle}</p>
      ) : null}
    </div>
  );
}


