import { z } from "zod";
import { randomUUID } from "crypto";

export enum Turno {
  MANHA = "manhã",
  TARDE = "tarde",
  NOITE = "noite",
}

export enum ClassStatus {
  ATIVA = "ativa",
  ENCERRADA = "encerrada",
  CANCELADA = "cancelada",
}

const createClassSchema = z.object({
  nome: z.string().min(1, "Nome da turma é obrigatório"),
  ano: z.number().int().min(2000).max(2100),
  turno: z.nativeEnum(Turno),
  maxAlunos: z.number().int().positive().default(30),
  professorId: z.string().uuid("ID do professor inválido").optional(),
});

type ClassProps = z.infer<typeof createClassSchema>;

export class Class {
  public readonly id: string;
  public readonly createdAt: Date;

  private _nome: string;
  private _ano: number;
  private _turno: Turno;
  private _maxAlunos: number;
  private _professorId?: string;
  private _status: ClassStatus;
  private _updatedAt: Date;

  // Getters
  get nome(): string { return this._nome; }
  get ano(): number { return this._ano; }
  get turno(): Turno { return this._turno; }
  get maxAlunos(): number { return this._maxAlunos; }
  get professorId(): string | undefined { return this._professorId; }
  get status(): ClassStatus { return this._status; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: ClassProps) {
    const validated = createClassSchema.parse(props);

    this._nome = validated.nome.trim();
    this._ano = validated.ano;
    this._turno = validated.turno;
    this._maxAlunos = validated.maxAlunos;
    this._professorId = validated.professorId;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
    this._status = ClassStatus.ATIVA;
  }

public toJSON() {
  return {
    id: this.id,
    nome: this._nome,
    ano: this._ano,
    turno: this._turno,
    maxAlunos: this._maxAlunos,
    professorId: this._professorId, // pode ser útil mostrar quem é o professor
    status: this._status,
    createdAt: this.createdAt,
    updatedAt: this._updatedAt,
  };
}

  // Método para atualizar dados básicos (nome e maxAlunos)
  public atualizarDados(dados: Partial<Pick<ClassProps, "nome" | "maxAlunos">>): void {
    if (dados.nome) {
      this._nome = dados.nome.trim();
    }
    if (dados.maxAlunos !== undefined) {
      if (dados.maxAlunos <= 0) {
        throw new Error("Número máximo de alunos deve ser positivo");
      }
      this._maxAlunos = dados.maxAlunos;
    }
    this._updatedAt = new Date();
  }

  // Atribuir professor (apenas se turma ativa)
  public atribuirProfessor(professorId: string): void {
    if (this._status !== ClassStatus.ATIVA) {
      throw new Error("Não é possível atribuir professor a uma turma não ativa");
    }
    this._professorId = professorId;
    this._updatedAt = new Date();
  }

  // Remover professor (apenas se turma ativa)
  public removerProfessor(): void {
    if (this._status !== ClassStatus.ATIVA) {
      throw new Error("Não é possível remover professor de uma turma não ativa");
    }
    this._professorId = undefined;
    this._updatedAt = new Date();
  }

  // Encerrar turma (apenas se estiver ativa)
  public encerrar(): void {
    if (this._status !== ClassStatus.ATIVA) {
      throw new Error("Apenas turmas ativas podem ser encerradas");
    }
    this._status = ClassStatus.ENCERRADA;
    this._updatedAt = new Date();
  }

  // Cancelar turma (apenas se estiver ativa)
  public cancelar(): void {
    if (this._status !== ClassStatus.ATIVA) {
      throw new Error("Apenas turmas ativas podem ser canceladas");
    }
    this._status = ClassStatus.CANCELADA;
    this._updatedAt = new Date();
  }

  // Reabrir turma (apenas se estiver encerrada ou cancelada)
  public reabrir(): void {
    if (this._status === ClassStatus.ATIVA) {
      throw new Error("Turma já está ativa");
    }
    this._status = ClassStatus.ATIVA;
    this._updatedAt = new Date();
  }
}