type EvidenceItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skill: string;
  linkLabel?: string;
  linkHref?: string;
  reflection: string;
};

type CertificateEvidenceProps = {
  note: string;
  items: EvidenceItem[];
};

export default function CertificateEvidence({
  note,
  items,
}: CertificateEvidenceProps) {
  return (
    <section
      id="certificate"
      data-section
      className="section-pad print-break"
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
            Evidence of Skill Improvement
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            This section presents evidence of a technical or soft skill improved
            through a course completed within the last year.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="glass-card certificate-card reveal p-6"
            >
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">
                    Certificate Name:
                  </span>{" "}
                  {item.title}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Issued By:</span>{" "}
                  {item.issuer}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Completion Date:
                  </span>{" "}
                  {item.date}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Skill Improved:
                  </span>{" "}
                  {item.skill}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Certificate Link:
                  </span>{" "}
                  {item.linkHref ? (
                    <a
                      href={item.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-700"
                    >
                      {item.linkLabel ?? item.linkHref}
                    </a>
                  ) : (
                    "[Add credential link]"
                  )}
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 text-sm text-slate-500">
                  {item.linkHref ? "Evidence PDF Attached" : "Evidence PDF Placeholder"}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Reflection</p>
                  <p className="mt-2 leading-7">{item.reflection}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-amber-600">
          {note}
        </p>
      </div>
    </section>
  );
}
