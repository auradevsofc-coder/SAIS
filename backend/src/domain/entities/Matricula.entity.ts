import { z } from "zod";
import { randomUUID } from "crypto";

export enum MatriculaStatus {
  ATIVA = "ativa",
  CANCELADA = "cancelada",
  CONCLUIDA = "concluida",
}

const matriculaSchema = z.object({
  alunoId: z.string().uuid(),
  turmaId: z.string().uuid(),
  dataMatricula: z.date().default(() => new Date()),
});

type MatriculaProps = z.infer<typeof matriculaSchema>;

export class Matricula {
  public readonly id: string;
  public readonly createdAt: Date;
  public updatedAt: Date;
  public status: MatriculaStatus;

  private _alunoId: string;
  private _turmaId: string;
  private _dataMatricula: Date;

  get alunoId(): string {
    return this._alunoId;
  }
  get turmaId(): string {
    return this._turmaId;
  }
  get dataMatricula(): Date {
    return this._dataMatricula;
  }

  constructor(props: MatriculaProps) {
    const validated = matriculaSchema.parse(props);
    this.id = randomUUID();
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.status = MatriculaStatus.ATIVA;
    this._alunoId = validated.alunoId;
    this._turmaId = validated.turmaId;
    this._dataMatricula = validated.dataMatricula;
  }

  public cancelar(): void {
    this.status = MatriculaStatus.CANCELADA;
    this.updatedAt = new Date();
  }

  public concluir(): void {
    this.status = MatriculaStatus.CONCLUIDA;
    this.updatedAt = new Date();
  }
}
