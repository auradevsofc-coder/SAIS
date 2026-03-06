import { GraduationCap, LogOut } from 'lucide-react';

export function NavBar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <GraduationCap size={18} />
          </div>

          <div>
            <h1 className="text-2xl font-semibold leading-none text-slate-900">S.A.I.S</h1>
            <p className="text-sm text-slate-500">{'Sistema Acad\u00eamico Integrado'}</p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-600">
          <LogOut size={16} />
          Sair
        </button>
      </div>
    </header>
  );
}
