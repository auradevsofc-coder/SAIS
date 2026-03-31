export type Discipline = {
  nome: string;
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  faltas: number;
};

type GradeTableProps = {
  disciplinas: Discipline[];
};

function calcularMedia(n1: number, n2: number, n3: number, n4: number) {
  return Number(((n1 + n2 + n3 + n4) / 4).toFixed(1));
}

export function GradeTable({ disciplinas }: GradeTableProps) {
  return (
    <div className="overflow-x-auto px-2 sm:px-0">
      <table className="min-w-full border-separate border-spacing-y-1 text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
          <tr className="bg-white shadow-sm transition">
            <th className="px-5 py-4 font-semibold md:px-6">Disciplina</th>
            <th className="px-5 py-4 font-semibold md:px-6">1º BIM</th>
            <th className="px-5 py-4 font-semibold md:px-6">2º BIM</th>
            <th className="px-5 py-4 font-semibold md:px-6">3º BIM</th>
            <th className="px-5 py-4 font-semibold md:px-6">4º BIM</th>
            <th className="px-5 py-4 font-semibold md:px-6">Média</th>
            <th className="px-5 py-4 font-semibold md:px-6">Faltas</th>
            <th className="px-5 py-4 font-semibold md:px-6">Situação</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {disciplinas.map((disciplina) => {
            const media = calcularMedia(
              disciplina.n1,
              disciplina.n2,
              disciplina.n3,
              disciplina.n4
            );

            const aprovado = media >= 7;

            return (
              <tr key={disciplina.nome}>
                <td className="px-5 py-4 font-semibold rounded-l-lg text-slate-900 md:px-6">
                  {disciplina.nome}
                </td>
                <td className="px-5 py-4 md:px-6">{disciplina.n1.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n2.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n3.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n4.toFixed(1)}</td>
                <td className="px-5 py-4 font-semibold text-slate-900 md:px-6">
                  {media.toFixed(1)}
                </td>
                <td className="px-5 py-4 md:px-6">{disciplina.faltas}</td>
                <td className="px-5 py-4 rounded-r-lg md:px-6">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      aprovado
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {aprovado ? 'Aprovado' : 'Reprovado'}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}