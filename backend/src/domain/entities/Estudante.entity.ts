import { z } from "zod";
import { randomUUID } from "crypto";

export enum EstudanteStatus {
  ATIVO = "ativo",
  INATIVO = "inativo",
  TRANSFERIDO = "transferido",
}

const createEstudanteSchema = z.object({
  userId: z.string().uuid("ID de usuário inválido"),
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(150, "Nome deve ter no máximo 150 caracteres")
    .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  cpf: z
    .string()
    .length(11, "CPF deve ter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  dataNascimento: z.coerce.date().max(new Date(), "Data de nascimento não pode ser futura"),
  nomeResponsavel: z.string().optional(),
  telefoneResponsavel: z.string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos")
    .optional(),
});

type EstudanteProps = z.infer<typeof createEstudanteSchema>;

export class Estudante {
  public readonly id: string;
  public readonly createdAt: Date;

  private _userId: string;
  private _nome: string;
  private _cpf: string;
  private _dataNascimento: Date;
  private _nomeResponsavel?: string;
  private _telefoneResponsavel?: string;
  private _status: EstudanteStatus;
  private _updatedAt: Date;

  // Getters
  get userId(): string { return this._userId; }
  get nome(): string { return this._nome; }
  get cpf(): string { return this._cpf; }
  get dataNascimento(): Date { return this._dataNascimento; }
  get nomeResponsavel(): string | undefined { return this._nomeResponsavel; }
  get telefoneResponsavel(): string | undefined { return this._telefoneResponsavel; }
  get status(): EstudanteStatus { return this._status; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: EstudanteProps) {
    const validated = createEstudanteSchema.parse(props);

    this._userId = validated.userId;
    this._nome = this.formatName(validated.nome);
    this._cpf = validated.cpf;
    this._dataNascimento = validated.dataNascimento;
    this._nomeResponsavel = validated.nomeResponsavel;
    this._telefoneResponsavel = validated.telefoneResponsavel;

    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
    this._status = EstudanteStatus.ATIVO;
  }

  private formatName(nome: string): string {
    return nome.trim().replace(/\s+/g, " ");
  }

  public atualizarDados(dados: Partial<Pick<EstudanteProps, "nome" | "nomeResponsavel" | "telefoneResponsavel">>): void {
    if (dados.nome) {
      this._nome = this.formatName(dados.nome);
    }
    if (dados.nomeResponsavel !== undefined) {
      this._nomeResponsavel = dados.nomeResponsavel;
    }
    if (dados.telefoneResponsavel !== undefined) {
      this._telefoneResponsavel = dados.telefoneResponsavel;
    }
    this._updatedAt = new Date();
  }

  public transferir(): void {
    if (this._status === EstudanteStatus.TRANSFERIDO) {
      throw new Error("Estudante já está transferido");
    }
    this._status = EstudanteStatus.TRANSFERIDO;
    this._updatedAt = new Date();
  }

  public inativar(): void {
    if (this._status === EstudanteStatus.INATIVO) {
      throw new Error("Estudante já está inativo");
    }
    this._status = EstudanteStatus.INATIVO;
    this._updatedAt = new Date();
  }

  public reativar(): void {
    if (this._status === EstudanteStatus.ATIVO) {
      throw new Error("Estudante já está ativo");
    }
    this._status = EstudanteStatus.ATIVO;
    this._updatedAt = new Date();
  }
}