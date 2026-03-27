import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import logoSais from "../assets/imagem_sais.png";

interface Disciplina {
  nome: string;
  bim1: number;
  bim2: number;
  bim3: number;
  bim4: number;
  media: number;
  faltas: number;
  situacao: "Aprovado" | "Reprovado" | "Recuperação";
}

const disciplinas: Disciplina[] = [
  { nome: "Matemática",  bim1: 8.5, bim2: 7.0, bim3: 9.0, bim4: 8.0, media: 8.1, faltas: 2, situacao: "Aprovado" },
  { nome: "Português",   bim1: 7.5, bim2: 8.0, bim3: 7.0, bim4: 8.5, media: 7.8, faltas: 1, situacao: "Aprovado" },
  { nome: "Física",      bim1: 6.0, bim2: 7.5, bim3: 8.0, bim4: 7.0, media: 7.1, faltas: 4, situacao: "Aprovado" },
  { nome: "Química",     bim1: 9.0, bim2: 8.5, bim3: 9.5, bim4: 9.0, media: 9.0, faltas: 0, situacao: "Aprovado" },
  { nome: "História",    bim1: 7.0, bim2: 7.5, bim3: 8.0, bim4: 7.5, media: 7.5, faltas: 3, situacao: "Aprovado" },
  { nome: "Geografia",   bim1: 8.0, bim2: 8.5, bim3: 7.5, bim4: 8.0, media: 8.0, faltas: 1, situacao: "Aprovado" },
];

const situacaoConfig = {
  Aprovado:    { badge: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  Reprovado:   { badge: "bg-red-100 text-red-800",       dot: "bg-red-500" },
  Recuperação: { badge: "bg-amber-100 text-amber-800",   dot: "bg-amber-500" },
};

function MediaBadge({ value }: { value: number }) {
  const color =
    value >= 8.5 ? "bg-blue-600" :
    value >= 7.0 ? "bg-indigo-500" :
    value >= 5.0 ? "bg-amber-500" : "bg-red-500";
  return (
    <span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-bold text-white ${color} shadow-sm`}>
      {value.toFixed(1)}
    </span>
  );
}

function NotaCell({ value }: { value: number }) {
  const color =
    value >= 8.0 ? "text-blue-700 font-semibold" :
    value >= 7.0 ? "text-slate-700 font-medium" :
    value >= 5.0 ? "text-amber-600 font-medium" : "text-red-600 font-semibold";
  return <span className={color}>{value.toFixed(1)}</span>;
}

export function Boletim() {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const mediaGeral =
    disciplinas.reduce((acc, d) => acc + d.media, 0) / disciplinas.length;
  const totalFaltas = disciplinas.reduce((acc, d) => acc + d.faltas, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-start py-10 px-4 font-sans">
      
      <header className="w-full max-w-7xl flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-5">
          <img src={logoSais} alt="Logo SAIS" className="w-16 h-16 rounded-full object-cover shadow-lg" />
          
          <div>
            <p className="text-3xl font-extrabold text-slate-900 leading-tight">S.A.I.S</p>
            <p className="text-sm text-slate-600 mt-1">Sistema Acadêmico Integrado</p>
          </div>
        </div>
        
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-white/70">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair
        </button>
      </header>

      <main className="w-full max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/70 p-6 mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow shrink-0">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-slate-900">João Silva Santos</h2>
            <p className="text-sm text-slate-500 mt-0.5">Matrícula: <span className="font-medium text-slate-700">2024001234</span></p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8 text-sm">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Curso</p>
              <p className="font-semibold text-slate-800">Engenharia de Software</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Período</p>
              <p className="font-semibold text-slate-800">3º Período</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Ano Letivo</p>
              <p className="font-semibold text-slate-800">2024</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-xl border border-slate-200/70 shadow-sm p-4 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Média Geral</p>
            <p className="text-3xl font-bold text-blue-600">{mediaGeral.toFixed(1)}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/70 shadow-sm p-4 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Disciplinas</p>
            <p className="text-3xl font-bold text-indigo-600">{disciplinas.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/70 shadow-sm p-4 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Total de Faltas</p>
            <p className="text-3xl font-bold text-slate-700">{totalFaltas}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/70 overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h3 className="text-lg font-bold text-white">Boletim Escolar</h3>
            <p className="text-blue-200 text-sm mt-0.5">Ano Letivo 2024</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-3 w-48">
                    Disciplina
                  </th>
                  {["1º BIM", "2º BIM", "3º BIM", "4º BIM"].map((b) => (
                    <th key={b} className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wide px-4 py-3">
                      {b}
                    </th>
                  ))}
                  <th className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wide px-4 py-3">Média</th>
                  <th className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wide px-4 py-3">Faltas</th>
                  <th className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-3">Situação</th>
                </tr>
              </thead>
              <tbody>
                {disciplinas.map((d, i) => {
                  const cfg = situacaoConfig[d.situacao];
                  const isHovered = hoveredRow === i;
                  return (
                    <tr
                      key={d.nome}
                      onMouseEnter={() => setHoveredRow(i)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`border-b border-slate-100 last:border-0 transition-colors duration-150 ${
                        isHovered ? "bg-blue-50/60" : i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-800 text-sm">{d.nome}</span>
                      </td>
                      <td className="px-4 py-4 text-center text-sm"><NotaCell value={d.bim1} /></td>
                      <td className="px-4 py-4 text-center text-sm"><NotaCell value={d.bim2} /></td>
                      <td className="px-4 py-4 text-center text-sm"><NotaCell value={d.bim3} /></td>
                      <td className="px-4 py-4 text-center text-sm"><NotaCell value={d.bim4} /></td>
                      <td className="px-4 py-4 text-center">
                        <MediaBadge value={d.media} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                          d.faltas === 0
                            ? "bg-emerald-50 text-emerald-700"
                            : d.faltas >= 4
                            ? "bg-red-50 text-red-700"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {d.faltas}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`}></span>
                          {d.situacao}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600"></span>Excelente (≥ 8.5)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>Bom (≥ 7.0)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span>Regular (≥ 5.0)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span>Insuficiente</span>
            </div>
            <p className="text-xs text-slate-400">Gerado em {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>
      </main>
    </div>
  );
}