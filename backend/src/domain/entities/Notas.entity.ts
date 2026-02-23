import { z } from "zod";
import { randomUUID } from "crypto";

const createNotaSchema = z.object({
  studentId: z.string().uuid("ID do estudante inválido"),
  subjectId: z.string().uuid("ID da disciplina inválido"),
  valor: z.number().min(0, "Nota mínima é 0").max(10, "Nota máxima é 10"),
  periodo: z.string().regex(/^\d{4}\.\d$/, "Período deve estar no formato '2026.1'"),
});

type NotaProps = z.infer<typeof createNotaSchema>;

export class Nota {
  public readonly id: string;
  public readonly createdAt: Date;

  private _studentId: string;
  private _subjectId: string;
  private _valor: number;
  private _periodo: string;
  private _updatedAt: Date;

  // Getters
  get studentId(): string { return this._studentId; }
  get subjectId(): string { return this._subjectId; }
  get valor(): number { return this._valor; }
  get periodo(): string { return this._periodo; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: NotaProps) {
    const validated = createNotaSchema.parse(props);

    this._studentId = validated.studentId;
    this._subjectId = validated.subjectId;
    this._valor = validated.valor;
    this._periodo = validated.periodo;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
  }

  public toJSON() {
  return {
    id: this.id,
    studentId: this._studentId,
    subjectId: this._subjectId,
    valor: this._valor,
    periodo: this._periodo,
    createdAt: this.createdAt,
    updatedAt: this._updatedAt,
  };
}

  public atualizarNota(novoValor: number): void {
    const valorSchema = z.number().min(0).max(10);
    valorSchema.parse(novoValor);
    this._valor = novoValor;
    this._updatedAt = new Date();
  }
}