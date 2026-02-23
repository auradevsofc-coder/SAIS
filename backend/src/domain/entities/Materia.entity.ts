import { z } from "zod";
import { randomUUID } from "crypto";

const createMateriasSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  classId: z.string().uuid("ID da turma inválido"),
  cargaHoraria: z.number().int().positive().max(200, "Carga horária máxima de 200 horas").optional(),
});

type MateriasProps = z.infer<typeof createMateriasSchema>;

export class Materia {
  public readonly id: string;
  public readonly createdAt: Date;

  private _nome: string;
  private _classId: string;
  private _cargaHoraria?: number;
  private _updatedAt: Date;

  get nome(): string { return this._nome; }
  get classId(): string { return this._classId; }
  get cargaHoraria(): number | undefined { return this._cargaHoraria; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: MateriasProps) {
    const validated = createMateriasSchema.parse(props);

    this._nome = validated.nome.trim().replace(/\s+/g, " ");
    this._classId = validated.classId;
    this._cargaHoraria = validated.cargaHoraria;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
  }

  public atualizarDados(dados: Partial<Pick<MateriasProps, "nome" | "cargaHoraria">>): void {
    if (dados.nome) {
      this._nome = dados.nome.trim().replace(/\s+/g, " ");
    }
    if (dados.cargaHoraria !== undefined) {
      this._cargaHoraria = dados.cargaHoraria;
    }
    this._updatedAt = new Date();
  }
}