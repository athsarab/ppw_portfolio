import PrintButton from "./PrintButton";

type CVSectionProps = {
  name: string;
  role: string;
  email: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  summary: string;
  education: string[];
  technicalSkills: string[];
  professionalSkills: string[];
  projects: { title: string; description: string }[];
  achievements: string[];
};

export default function CVSection({
  name,
  role,
  email,
  portfolioUrl,
  linkedinUrl,
  githubUrl,
  location,
  summary,
  education,
  technicalSkills,
  professionalSkills,
  projects,
  achievements,
}: CVSectionProps) {
  return (
    <section id="cv" data-section className="section-pad print-break">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
              Curriculum Vitae
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Print-ready summary of academic and professional profile.
            </p>
          </div>
          <PrintButton label="Print CV Section" />
        </div>
        <div className="glass-card reveal p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600">
              {role}
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              <span>
                Email:{" "}
                <a href={`mailto:${email}`} className="text-cyan-700">
                  {email}
                </a>
              </span>
              <span>
                Portfolio:{" "}
                <a href={portfolioUrl} className="text-cyan-700">
                  {portfolioUrl}
                </a>
              </span>
              <span>
                LinkedIn:{" "}
                <a href={linkedinUrl} className="text-cyan-700">
                  {linkedinUrl}
                </a>
              </span>
              <span>
                GitHub:{" "}
                <a href={githubUrl} className="text-cyan-700">
                  {githubUrl}
                </a>
              </span>
              <span>Location: {location}</span>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Professional Summary
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {summary}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Education
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Technical Skills
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  {technicalSkills.join(", ")}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Professional Skills
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  {professionalSkills.join(", ")}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Projects
              </h4>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                {projects.map((project) => (
                  <div key={project.title}>
                    <span className="font-semibold text-slate-900">
                      {project.title}
                    </span>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Achievements / Development
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
