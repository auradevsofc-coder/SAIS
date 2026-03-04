import { NavBar } from "../components/NavBar";

export function Boletim() {
  const disciplinas = [
    { nome: "Matemática", n1: 8.5, n2: 7.0, n3: 9.0, n4: 8.0, faltas: 2 },
    { nome: "Português", n1: 7.5, n2: 8.0, n3: 7.0, n4: 8.5, faltas: 1 },
    { nome: "Física", n1: 6.0, n2: 7.5, n3: 8.0, n4: 7.0, faltas: 4 },
    { nome: "Química", n1: 9.0, n2: 8.5, n3: 9.5, n4: 9.0, faltas: 0 },
    { nome: "História", n1: 7.0, n2: 7.5, n3: 8.0, n4: 7.5, faltas: 3 },
    { nome: "Geografia", n1: 8.0, n2: 8.5, n3: 7.5, n4: 8.0, faltas: 1 },
  ];

  const calcularMedia = (
    a: number,
    b: number,
    c: number,
    d: number
  ): string => {
    return ((a + b + c + d) / 4).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />

      <main className="pt-24">
        <div className="max-w-6xl mx-auto p-8 space-y-8">

          {/* Card Dados do Aluno */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                JS
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  João Silva Santos
                </h2>
                <p className="text-sm text-slate-500">
                  Matrícula: 2024001234
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-600 space-x-10">
              <span>
                <strong>Curso:</strong> Engenharia de Software
              </span>
              <span>
                <strong>Período:</strong> 3º Período
              </span>
            </div>
          </div>

          {/* Card Boletim */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-lg font-semibold">Boletim Escolar</h3>
              <p className="text-sm opacity-80">Ano Letivo 2024</p>
            </div>

            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Disciplina</th>
                  <th className="px-6 py-3">1º BIM</th>
                  <th className="px-6 py-3">2º BIM</th>
                  <th className="px-6 py-3">3º BIM</th>
                  <th className="px-6 py-3">4º BIM</th>
                  <th className="px-6 py-3">Média</th>
                  <th className="px-6 py-3">Faltas</th>
                  <th className="px-6 py-3">Situação</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {disciplinas.map((d, index) => {
                  const media = calcularMedia(d.n1, d.n2, d.n3, d.n4);
                  const aprovado = Number(media) >= 7;

                  return (
                    <tr key={index} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {d.nome}
                      </td>
                      <td className="px-6 py-4">{d.n1}</td>
                      <td className="px-6 py-4">{d.n2}</td>
                      <td className="px-6 py-4">{d.n3}</td>
                      <td className="px-6 py-4">{d.n4}</td>
                      <td className="px-6 py-4 font-semibold">{media}</td>
                      <td className="px-6 py-4">{d.faltas}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            aprovado
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {aprovado ? "Aprovado" : "Reprovado"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}