type Outcome = {
  title: string;
  description: string;
};

type PPWOutcomesProps = {
  outcomes: Outcome[];
};

export default function PPWOutcomes({ outcomes }: PPWOutcomesProps) {
  return (
    <section id="outcomes" data-section className="section-pad">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
            How PPW Improved My Professional Readiness
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Key improvements strengthened through IT4070 learning activities.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="glass-card reveal print-avoid p-5"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {outcome.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
