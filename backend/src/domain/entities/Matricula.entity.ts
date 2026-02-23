import { z } from "zod";
import { randomUUID } from "crypto";

export enum MatriculaStatus {
  ATIVA = "ativa",
  CONCLUIDA = "concluida",
  CANCELADA = "cancelada",
}

const createMatriculaSchema = z.object({
  studentId: z.string().uuid("ID do estudante inválido"),
  classId: z.string().uuid("ID da turma inválido"),
  status: z.nativeEnum(MatriculaStatus).default(MatriculaStatus.ATIVA),
  matriculadoEm: z.date().default(() => new Date()),
  concluidoEm: z.date().optional(),
});

type MatriculaProps = z.infer<typeof createMatriculaSchema>;

export class Matricula {
  public readonly id: string;
  public readonly createdAt: Date;

  private _studentId: string;
  private _classId: string;
  private _status: MatriculaStatus;
  private _matriculadoEm: Date;
  private _concluidoEm?: Date;
  private _updatedAt: Date;

  // Getters...
  get studentId(): string { return this._studentId; }
  get classId(): string { return this._classId; }
  get status(): MatriculaStatus { return this._status; }
  get matriculadoEm(): Date { return this._matriculadoEm; }
  get concluidoEm(): Date | undefined { return this._concluidoEm; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: MatriculaProps) {
    const validated = createMatriculaSchema.parse(props);

    // Validação adicional: se CONCLUIDA, deve ter data meu chapa
    if (validated.status === MatriculaStatus.CONCLUIDA && !validated.concluidoEm) {
      throw new Error("Matrícula concluída deve ter data de conclusão");
    }

    this._studentId = validated.studentId;
    this._classId = validated.classId;
    this._status = validated.status;
    this._matriculadoEm = validated.matriculadoEm;
    this._concluidoEm = validated.concluidoEm;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
  }

  public toJSON() {
  return {
    id: this.id,
    studentId: this._studentId,
    classId: this._classId,
    status: this._status,
    matriculadoEm: this._matriculadoEm,
    concluidoEm: this._concluidoEm,
    createdAt: this.createdAt,
    updatedAt: this._updatedAt,
  };
}

  public concluir(): void {
    if (this._status !== MatriculaStatus.ATIVA) {
      throw new Error("Apenas matrículas ativas podem ser concluídas");
    }
    this._status = MatriculaStatus.CONCLUIDA;
    this._concluidoEm = new Date();
    this._updatedAt = new Date();
  }

  public cancelar(): void {
    if (this._status !== MatriculaStatus.ATIVA) {
      throw new Error("Apenas matrículas ativas podem ser canceladas");
    }
    this._status = MatriculaStatus.CANCELADA;
    this._updatedAt = new Date();
  }

  public reativar(): void {
    if (this._status !== MatriculaStatus.CANCELADA) {
      throw new Error("Apenas matrículas canceladas podem ser reativadas");
    }
    this._status = MatriculaStatus.ATIVA;
    this._concluidoEm = undefined;
    this._updatedAt = new Date();
  }
}