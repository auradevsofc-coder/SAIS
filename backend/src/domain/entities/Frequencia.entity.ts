import { z } from "zod";
import { randomUUID } from "crypto";

export enum FrequenciaStatus {
  PRESENTE = "presente",
  AUSENTE = "ausente",
  ATRASADO = "atrasado",
  JUSTIFICADO = "justificado",
}

const createFrequenciaSchema = z.object({
  studentId: z.string().uuid("ID do estudante inválido"),
  subjectId: z.string().uuid("ID da disciplina inválido"),
  data: z.date().max(new Date(), "Data não pode ser futura"),
  status: z.nativeEnum(FrequenciaStatus),
});

type FrequenciaProps = z.infer<typeof createFrequenciaSchema>;

export class Frequencia {
  public readonly id: string;
  public readonly createdAt: Date;

  private _studentId: string;
  private _subjectId: string;
  private _data: Date;
  private _status: FrequenciaStatus;
  private _updatedAt: Date;

  get studentId(): string { return this._studentId; }
  get subjectId(): string { return this._subjectId; }
  get data(): Date { return this._data; }
  get status(): FrequenciaStatus { return this._status; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: FrequenciaProps) {
    const validated = createFrequenciaSchema.parse(props);

    this._studentId = validated.studentId;
    this._subjectId = validated.subjectId;
    this._data = validated.data;
    this._status = validated.status;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
  }

  public toJSON() {
  return {
    id: this.id,
    studentId: this._studentId,
    subjectId: this._subjectId,
    data: this._data,
    status: this._status,
    createdAt: this.createdAt,
    updatedAt: this._updatedAt,
  };
}

  public alterarStatus(novoStatus: FrequenciaStatus): void {
    this._status = novoStatus;
    this._updatedAt = new Date();
  }
}