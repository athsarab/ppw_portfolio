type ReflectionCardProps = {
  title: string;
  description: string;
};

export default function ReflectionCard({
  title,
  description,
}: ReflectionCardProps) {
  return (
    <article className="glass-card reveal print-avoid p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
