import { z } from "zod";
import { randomUUID } from "crypto";

export enum ProfessorStatus {
  ATIVO = "ativo",
  INATIVO = "inativo",
  AFASTADO = "afastado",
}

const createProfessorSchema = z.object({
  userId: z.string().uuid("ID de usuário inválido"),
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(150, "Nome deve ter no máximo 150 caracteres")
    .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  disciplinaPrincipal: z.string().optional(),
  telefone: z.string().optional(),
  especializacao: z.string().optional(),
});

type ProfessorProps = z.infer<typeof createProfessorSchema>;

export class Professor {
  public readonly id: string;
  public readonly createdAt: Date;

  private _userId: string;
  private _nome: string;
  private _disciplinaPrincipal?: string;
  private _telefone?: string;
  private _especializacao?: string;
  private _status: ProfessorStatus;
  private _updatedAt: Date;

  get userId(): string {
    return this._userId;
  }
  get nome(): string {
    return this._nome;
  }
  get disciplinaPrincipal(): string | undefined {
    return this._disciplinaPrincipal;
  }
  get telefone(): string | undefined {
    return this._telefone;
  }
  get especializacao(): string | undefined {
    return this._especializacao;
  }
  get status(): ProfessorStatus {
    return this._status;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  constructor(props: ProfessorProps) {
    const validated = createProfessorSchema.parse(props);

    this._userId = validated.userId;
    this._nome = this.formatName(validated.nome);
    this._disciplinaPrincipal = validated.disciplinaPrincipal;
    this._telefone = validated.telefone;
    this._especializacao = validated.especializacao;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
    this._status = ProfessorStatus.ATIVO;
  }

  private formatName(nome: string): string {
    return nome.trim().replace(/\s+/g, " ");
  }

  public atualizarDados(dados: Partial<Pick<ProfessorProps, "nome" | "disciplinaPrincipal" | "telefone" | "especializacao">>): void {
    if (dados.nome) {
      this._nome = this.formatName(dados.nome);
    }
    if (dados.disciplinaPrincipal !== undefined) {
      this._disciplinaPrincipal = dados.disciplinaPrincipal;
    }
    if (dados.telefone !== undefined) {
      this._telefone = dados.telefone;
    }
    if (dados.especializacao !== undefined) {
      this._especializacao = dados.especializacao;
    }
    this._updatedAt = new Date();
  }

  public afastar(): void {
    if (this._status === ProfessorStatus.AFASTADO) {
      throw new Error("Professor já está afastado");
    }
    this._status = ProfessorStatus.AFASTADO;
    this._updatedAt = new Date();
  }

  public inativar(): void {
    if (this._status === ProfessorStatus.INATIVO) {
      throw new Error("Professor já está inativo");
    }
    this._status = ProfessorStatus.INATIVO;
    this._updatedAt = new Date();
  }

  public reativar(): void {
    if (this._status === ProfessorStatus.ATIVO) {
      throw new Error("Professor já está ativo");
    }
    this._status = ProfessorStatus.ATIVO;
    this._updatedAt = new Date();
  }
}