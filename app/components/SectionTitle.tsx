type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <header className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base md:text-lg text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
