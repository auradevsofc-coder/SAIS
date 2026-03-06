import { UserRound } from 'lucide-react';
import { NavBar } from '../components/NavBar';
import { type Discipline, GradeTable } from '../components/grade/GradeTable';

const disciplinas: Discipline[] = [
  { nome: 'Matem\u00e1tica', n1: 8.5, n2: 7.0, n3: 9.0, n4: 8.0, faltas: 2 },
  { nome: 'Portugu\u00eas', n1: 7.5, n2: 8.0, n3: 7.0, n4: 8.5, faltas: 1 },
  { nome: 'F\u00edsica', n1: 6.0, n2: 7.5, n3: 8.0, n4: 7.0, faltas: 4 },
  { nome: 'Qu\u00edmica', n1: 9.0, n2: 8.5, n3: 9.5, n4: 9.0, faltas: 0 },
  { nome: 'Hist\u00f3ria', n1: 7.0, n2: 7.5, n3: 8.0, n4: 7.5, faltas: 3 },
  { nome: 'Geografia', n1: 8.0, n2: 8.5, n3: 7.5, n4: 8.0, faltas: 1 },
];

export function Boletim() {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <div className="space-y-8">
          <section className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm md:px-7 md:py-6">
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_auto_auto] md:items-center md:gap-14">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <UserRound size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold leading-none text-slate-900 md:text-[34px]">
                  {'Jo\u00e3o Silva Santos'}
                </h2>
                <p className="mt-1 text-base text-slate-500">{'Matr\u00edcula: 2024001234'}</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 md:text-base">
              <span className="font-semibold">Curso:</span> Engenharia de Software
            </p>

            <p className="text-sm text-slate-700 md:text-base">
              <span className="font-semibold">{'Per\u00edodo:'}</span> {'3\u00ba Per\u00edodo'}
            </p>
            </div>
          </section>

          <section className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-blue-600 px-5 py-4 text-white md:px-6">
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">Boletim Escolar</h3>
              <p className="text-[15px] opacity-90">Ano Letivo 2024</p>
            </div>

            <GradeTable disciplinas={disciplinas} />
          </section>
        </div>
      </main>
    </div>
  );
}
