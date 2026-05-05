type TimelineItem = {
  range: string;
  title: string;
  points: string[];
};

type CareerTimelineProps = {
  items: TimelineItem[];
};

export default function CareerTimeline({ items }: CareerTimelineProps) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div
          key={item.range}
          className="glass-card timeline-item reveal print-avoid p-6"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {item.range}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
