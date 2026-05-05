type CertificateEvidenceProps = {
  note: string;
};

export default function CertificateEvidence({ note }: CertificateEvidenceProps) {
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
        <div className="glass-card certificate-card reveal p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">
                  Certificate Name:
                </span>{" "}
                [Replace with actual certificate from LinkedIn]
              </p>
              <p>
                <span className="font-semibold text-slate-900">Issued By:</span>{" "}
                [Replace with issuing organization]
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Completion Date:
                </span>{" "}
                [Replace with date]
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Skill Improved:
                </span>{" "}
                [Technical or soft skill]
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Certificate Link:
                </span>{" "}
                [Paste LinkedIn certificate URL or credential URL]
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 text-sm text-slate-500">
                Evidence Image / PDF Placeholder
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Reflection</p>
                <p className="mt-2 leading-7">
                  Through this course, I improved my knowledge and practical
                  ability in [skill]. It supported my career development by
                  strengthening my confidence, technical capability, and
                  readiness for professional work.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-amber-600">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
