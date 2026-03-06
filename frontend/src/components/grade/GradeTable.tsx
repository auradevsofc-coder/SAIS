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
    <div className="overflow-x-auto px-2 md:px-0">
      <table className="min-w-full text-left text-sm text-slate-700">
        <thead className="border-b border-slate-200 bg-white text-xs uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-5 py-4 font-semibold md:px-6">Disciplina</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'1\u00ba BIM'}</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'2\u00ba BIM'}</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'3\u00ba BIM'}</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'4\u00ba BIM'}</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'M\u00e9dia'}</th>
            <th className="px-5 py-4 font-semibold md:px-6">Faltas</th>
            <th className="px-5 py-4 font-semibold md:px-6">{'Situa\u00e7\u00e3o'}</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">
          {disciplinas.map((disciplina) => {
            const media = calcularMedia(disciplina.n1, disciplina.n2, disciplina.n3, disciplina.n4);
            const aprovado = media >= 7;

            return (
              <tr key={disciplina.nome}>
                <td className="px-5 py-4 text-base font-semibold text-slate-900 md:px-6">{disciplina.nome}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n1.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n2.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n3.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.n4.toFixed(1)}</td>
                <td className="px-5 py-4 font-semibold text-slate-900 md:px-6">{media.toFixed(1)}</td>
                <td className="px-5 py-4 md:px-6">{disciplina.faltas}</td>
                <td className="px-5 py-4 md:px-6">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      aprovado ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
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
