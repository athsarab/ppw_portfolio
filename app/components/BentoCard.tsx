type BentoCardProps = {
  title: string;
  value: string;
  description?: string;
};

export default function BentoCard({ title, value, description }: BentoCardProps) {
  return (
    <div className="glass-card bento-card flex flex-col gap-3 p-5">
      <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {title}
      </span>
      <span className="text-lg font-semibold text-slate-900">{value}</span>
      {description ? (
        <p className="text-sm text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
