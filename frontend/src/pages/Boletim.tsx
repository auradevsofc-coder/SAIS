import { UserRound } from 'lucide-react';
import { NavBar } from '../components/NavBar';
import { type Discipline, GradeTable } from '../components/grade/GradeTable';

const disciplinas: Discipline[] = [
  { nome: 'Matemática', n1: 8.5, n2: 7.0, n3: 9.0, n4: 8.0, faltas: 2 },
  { nome: 'Português', n1: 7.5, n2: 8.0, n3: 7.0, n4: 8.5, faltas: 1 },
  { nome: 'Física', n1: 6.0, n2: 7.5, n3: 8.0, n4: 7.0, faltas: 4 },
  { nome: 'Química', n1: 9.0, n2: 8.5, n3: 9.5, n4: 9.0, faltas: 0 },
  { nome: 'História', n1: 7.0, n2: 7.5, n3: 8.0, n4: 7.5, faltas: 3 },
  { nome: 'Geografia', n1: 8.0, n2: 8.5, n3: 7.5, n4: 8.0, faltas: 1 },
];

export function Boletim() {
  return (
    <div className="min-h-screen bg-[#eef3fb]">
      <NavBar />
      
      <main className="w-full flex justify-center pt-24 pb-12">
        <div className="w-full max-w-4xl px-4 lg:px-8 space-y-8"> 
          
          <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="grid md:grid-cols-3 items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <UserRound size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    João Silva Santos
                  </h2>
                  <p className="text-sm text-slate-500">
                    Matrícula: 2024001234
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 text-center md:text-left">
                <span className="font-medium">Curso:</span> Engenharia de Software
              </p>

              <p className="text-sm text-slate-600 text-center md:text-right">
                <span className="font-medium">Período:</span> 3º Período
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="bg-linear-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
              <h3 className="text-2xl font-bold">Boletim Escolar</h3>
              <p className="text-sm opacity-90 mt-1">Ano Letivo 2024</p>
            </div>

            <div className="p-8">
              <GradeTable disciplinas={disciplinas} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}