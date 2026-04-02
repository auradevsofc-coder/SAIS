import type { ReactNode } from 'react';

type GradeCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
};

export function GradeCard({ title, value, subtitle, icon }: GradeCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-slate-800">{value}</p>
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
        </div>
        {icon && <span className="text-blue-600">{icon}</span>}
      </div>
    </article>
  );
}
