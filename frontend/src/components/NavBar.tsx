import { GraduationCap, LogOut } from 'lucide-react';

export function NavBar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-16 items-center max-w-6xl justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <GraduationCap size={18} />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-slate-900">S.A.I.S</h1>
            <p className="text-xs text-slate-500">Sistema Acadêmico Integrado</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600">
          <LogOut size={16} />
          Sair
        </button>
      </div>
    </header>
  );
}