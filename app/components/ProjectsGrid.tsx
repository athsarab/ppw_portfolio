type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  link?: string;
};

type ProjectsGridProps = {
  projects: ProjectItem[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section id="projects" data-section className="section-pad">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
            Projects and Portfolio Evidence
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Highlighted academic and personal projects that demonstrate applied
            full-stack development skills.
          </p>
        </div>
        <div className="bento-grid grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card bento-card reveal print-avoid p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  Learning Outcome:
                </span>{" "}
                {project.outcome}
              </p>
              {project.link ? (
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Link:</span>{" "}
                  {project.link}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
