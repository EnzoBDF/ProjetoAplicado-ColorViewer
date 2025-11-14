export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`px-6 py-20 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}


