import logoSais from '../assets/imagem_sais.png';

export function NavBar() {
  return (
    <header className="sticky top-0 left-0 w-full  h-18 bg-white border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Lado esquerdo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <img src={logoSais} className="h-8 md:h-17 w-auto" />
          </div>

          <div>
            <h1 className="font-semibold text-slate-800">
              S.A.I.S
            </h1>
            <p className="text-xs text-slate-500">
              Sistema Acadêmico Integrado
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <button className="text-sm text-slate-600 hover:text-blue-600 transition">
          Sair
        </button>

      </div>
    </header>
  );
}