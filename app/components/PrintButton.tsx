"use client";

type PrintButtonProps = {
  label?: string;
  className?: string;
};

export default function PrintButton({
  label = "Print / Save as PDF",
  className = "",
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`no-print inline-flex items-center justify-center rounded-full border border-cyan-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:border-cyan-300 hover:bg-white ${className}`}
    >
      {label}
    </button>
  );
}
