import { NavBar } from '../components/NavBar';
import '../App.css';
import '../index.css';
import logoSais from '../assets/imagem_sais.png';

export function Boletim() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center">
        <main className="w-full max-w-[1240px] px-6 py-9 flex flex-col gap-8">
          <section className="w-full bg-white rounded-2xl border border-[#e7edf5] shadow-sm px-6 py-7 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#eef4ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <img src={logoSais} alt="Logo da escola" className="w-10 h-10 object-contain" />
            </div>

            <div className="min-w-[260px]">
              <h2 className="text-[30px] leading-tight font-normal text-[#0f172a]">Teste</h2>
              <p className="mt-2 text-[17px] leading-tight text-[#0f172a]">
                <span className="font-normal">Matrícula:</span> 2024001234
              </p>
            </div>

            <div className="ml-auto flex items-center gap-16 text-[17px] leading-tight text-[#0f172a]">
              <p>
                <span className="font-normal">Curso:</span> Engenharia de Software
              </p>
              <p>
                <span className="font-normal">Período:</span> 3º Período
              </p>
            </div>
          </section>

          <section className="w-full bg-white rounded-2xl border border-[#e7edf5] shadow-md overflow-hidden">
            <div className="bg-[#0d5bff] px-6 py-5 text-white">
              <h3 className="text-[24px] leading-tight font-normal">Boletim Escolar</h3>
              <p className="mt-1 text-[14px] leading-tight text-white/90">Ano Letivo 2024</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#e9eef5] text-[#0f172a] uppercase tracking-wide">
                    <th className="py-4 pl-14 pr-4 text-left text-[15px] font-normal">
                      Disciplina
                    </th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">1º Bim</th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">2º Bim</th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">3º Bim</th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">4º Bim</th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">Média</th>
                    <th className="py-4 px-4 text-center text-[15px] font-normal">Faltas</th>
                    <th className="py-4 pl-4 pr-12 text-center text-[15px] font-normal">
                      Situação
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[#0f172a]">
                  {[
                    { m: 'Matemática', n: [8.5, 7.0, 9.0, 8.0], med: 8.1, f: 2 },
                    { m: 'Português', n: [7.5, 8.0, 7.0, 8.5], med: 7.8, f: 1 },
                    { m: 'Física', n: [6.0, 7.5, 8.0, 7.0], med: 7.1, f: 4 },
                    { m: 'Química', n: [9.0, 8.5, 9.5, 9.0], med: 9.0, f: 0 },
                    { m: 'História', n: [7.0, 7.5, 8.0, 7.5], med: 7.5, f: 3 },
                    { m: 'Geografia', n: [8.0, 8.5, 7.5, 8.0], med: 8.0, f: 1 },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-[#e9eef5] last:border-b-0">
                      <td className="py-6 pl-14 pr-4 text-[18px] leading-tight font-normal whitespace-nowrap">
                        {item.m}
                      </td>
                      {item.n.map((nota, idx) => (
                        <td
                          key={idx}
                          className="py-6 px-4 text-center text-[16px] leading-tight font-normal"
                        >
                          {nota.toFixed(1)}
                        </td>
                      ))}
                      <td className="py-6 px-4 text-center text-[16px] leading-tight font-normal">
                        {item.med.toFixed(1)}
                      </td>
                      <td className="py-6 px-4 text-center text-[16px] leading-tight font-normal">
                        {item.f}
                      </td>
                      <td className="py-6 pl-4 pr-12 text-center">
                        <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full text-[13px] leading-tight font-normal text-[#16a34a] bg-[#ecfdf3]">
                          Aprovado
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
