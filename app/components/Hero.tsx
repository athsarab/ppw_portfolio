import PrintButton from "./PrintButton";

type HeroProps = {
  name: string;
  role: string;
  statement: string;
  portfolioUrl: string;
  linkedinUrl: string;
  assessmentItems: { label: string; value: string }[];
};

export default function Hero({
  name,
  role,
  statement,
  portfolioUrl,
  linkedinUrl,
  assessmentItems,
}: HeroProps) {
  const words = ["Professional", "Portfolio"];

  return (
    <section id="home" data-section className="section-pad print-cover">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            IT4070 - Preparation for Professional World
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-slate-900">
            {words.map((word) => (
              <span
                key={word}
                className="hero-word block leading-tight text-slate-900"
              >
                {word}
              </span>
            ))}
          </h1>
          <div className="flex flex-col gap-2 text-slate-700">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-600">
              {role}
            </p>
          </div>
          <p className="text-base leading-7 text-slate-600 max-w-xl">
            {statement}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
            >
              View Portfolio
            </a>
            <PrintButton />
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:border-slate-300"
            >
              Visit Current Portfolio
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-cyan-50/80 px-6 py-3 text-sm font-semibold text-cyan-700 shadow-soft transition hover:border-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="glass-card bento-card flex flex-col gap-4 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Assessment Summary
          </h3>
          <div className="flex flex-col gap-4">
            {assessmentItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </span>
                <span className="text-base font-semibold text-slate-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
