// não sei se isso aqui vai funcionar, mas vamos tentar

import { z } from "zod";
import { randomUUID } from "crypto";

export enum UserRole {
  ADMIN = "admin",
  PROFESSOR = "professor",
  ALUNO = "aluno",
}

export enum UserStatus {
  ATIVO = "ativo",
  INATIVO = "inativo",
  BANIDO = "banido",
  PENDENTE = "pendente",
}

export enum Shift {
  MANHÃ = "manhã",
}

export enum AttendanceStatus {
  PRESENTE = "presente",
  AUSENTE = "ausente",
  ATRASADO = "atrasado",
}

// Schema do Zod para validação dos dados de entrada
const userSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(150, "Nome deve ter no máximo 150 caracteres")
    .regex(
      /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/,
      "Nome deve conter apenas letras e espaços",
    ),
  email: z
    .string()
    //.email("E-mail inválido")
    .min(5, "E-mail muito curto")
    .max(254, "E-mail muito longo"),
  senha: z
    .string()
    .length(6, "Senha deve ter 6 dígitos")
    .regex(/^\d+$/, "Senha deve conter apenas números"),
  cpf: z
    .string()
    .length(11, "CPF deve ter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  matricula: z
    .string()
    .length(6, "Matrícula deve ter 6 dígitos")
    .regex(/^\d+$/, "Matrícula deve conter apenas números"),
  role: z.nativeEnum(UserRole).default(UserRole.ALUNO),
});

// Tipo inferido do schema (esturutura)
type UserProps = z.infer<typeof userSchema>;

export class User {
  // Propriedades públicas readonly (imutáveis) (readonly para garantir que não sejam alteradas diretamente)
  public readonly id: string;
  public readonly createdAt: Date;

  // Propriedades privadas com getters
  private _nome: string;
  private _email: string;
  private _senha: string;
  private _cpf: string;
  private _matricula: number;
  private _role: UserRole;
  private _status: UserStatus;
  private _ultimoLogin: Date | null;
  private _tentativasLogin: number;
  private _updatedAt: Date;

  // Getters
  get nome(): string {
    return this._nome;
  }
  get email(): string {
    return this._email;
  }
  get senha(): string {
    return this._senha;
  }
  get cpf(): string {
    return this._cpf;
  }
  get matricula(): number {
    return this._matricula;
  }
  get role(): UserRole {
    return this._role;
  }
  get status(): UserStatus {
    return this._status;
  }
  get ultimoLogin(): Date | null {
    return this._ultimoLogin;
  }
  get tentativasLogin(): number {
    return this._tentativasLogin;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  constructor(props: UserProps) {
    // 1. Validar os dados com Zod
    const validated = userSchema.parse(props);

    // 2. Formatações adicionais
    this._nome = this.formatName(validated.nome);
    this._email = this.normalizeEmail(validated.email);
    this._cpf = this.formatCpf(validated.cpf); // já sem pontuação
    this._matricula = parseInt(validated.matricula, 10);
    this._senha = validated.senha; // (a senha fornecida pelo usuário já deve ter passado por um processo de hashing antes de chegar aqui)
    this._role = validated.role;

    // 3. Propriedades internas
    this.id = randomUUID();
    this.createdAt = new Date();
    this._updatedAt = new Date();
    this._status = UserStatus.PENDENTE;
    this._ultimoLogin = null;
    this._tentativasLogin = 0;
  }

  // Formatações
  private formatName(nome: string): string {
    return nome.trim().replace(/\s+/g, " ");
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }
  private formatCpf(Cpf: string): string {
    return Cpf.trim().replace(/^\d+$/, "");
  }
  // Métodos de negócio
  public ativar(): void {
    if (this._status === UserStatus.ATIVO) {
      throw new Error("Usuário já está ativo");
    }
    this._status = UserStatus.ATIVO;
    this._updatedAt = new Date();
  }

  public desativar(): void {
    if (this._status === UserStatus.INATIVO) {
      throw new Error("Usuário já está inativo");
    }
    this._status = UserStatus.INATIVO;
    this._updatedAt = new Date();
  }

  public banir(): void {
    this._status = UserStatus.BANIDO;
    this._updatedAt = new Date();
  }

  public registrarLogin(): void {
    this._ultimoLogin = new Date();
    this._tentativasLogin = 0;
    this._updatedAt = new Date();
  }

  public registrarFalhaLogin(): void {
    this._tentativasLogin++;
    if (this._tentativasLogin >= 5) {
      this._status = UserStatus.INATIVO;
    }
    this._updatedAt = new Date();
  }

  public alterarSenha(novaSenha: string): void {
    // Reutiliza a validação de senha do Zod
    const senhaSchema = z.string().min(6).max(15).regex(/[A-Z]/).regex(/[0-9]/);
    senhaSchema.parse(novaSenha);
    this._senha = novaSenha;
    this._updatedAt = new Date();
  }

  public alterarEmail(novoEmail: string): void {
    const emailSchema = z.string().email();
    emailSchema.parse(novoEmail);
    this._email = this.normalizeEmail(novoEmail);
    this._updatedAt = new Date();
  }
}
