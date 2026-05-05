import PrintButton from "./PrintButton";

type FooterProps = {
  name: string;
  tagline: string;
  links: { label: string; url: string }[];
  sections: { label: string; href: string }[];
};

export default function Footer({ name, tagline, links, sections }: FooterProps) {
  return (
    <footer id="contact" data-section className="section-pad">
      <div className="glass-card footer-reveal reveal p-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              {name}
            </h3>
            <p className="text-sm text-slate-600">{tagline}</p>
            <PrintButton />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              {sections.map((section) => (
                <a key={section.href} href={section.href}>
                  {section.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              {links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Use the print button to export this portfolio as a PDF for
              submission.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
          © 2026 {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
