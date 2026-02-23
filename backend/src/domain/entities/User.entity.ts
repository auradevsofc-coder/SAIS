import { z } from "zod";
import { randomUUID } from "crypto";

export enum UserRole {
  ADMIN = "ADMIN",
  PROFESSOR = "PROFESSOR",
  ALUNO = "ALUNO",
}

export enum UserStatus {
  ATIVO = "ATIVO",
  INATIVO = "INATIVO",
  BANIDO = "BANIDO",
  PENDENTE = "PENDENTE",
}

const createUserSchema = z.object({
  nome: z.string().min(3).max(150).regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/),
  email: z.string().email().min(5).max(254),
  senha: z.string().min(6).max(15).regex(/[A-Z]/).regex(/[0-9]/),
  cpf: z.string().length(11).regex(/^\d+$/),
  matricula: z.string().length(6).regex(/^\d+$/),
  role: z.nativeEnum(UserRole).default(UserRole.ALUNO),
});

type CreateUserProps = z.infer<typeof createUserSchema>;

export type UserProps = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  matricula: string;
  role: UserRole;
  status: UserStatus;
  ultimoLogin: Date | null;
  tentativasLogin: number;
  createdAt: Date;
  updatedAt: Date;
};

export class User {
  private _nome: string;
  private _email: string;
  private _senha: string;
  private _cpf: string;
  private _matricula: string;
  private _role: UserRole;
  private _status: UserStatus;
  private _ultimoLogin: Date | null;
  private _tentativasLogin: number;
  private _updatedAt: Date;

  public readonly id: string;
  public readonly createdAt: Date;

  // Getters
  get nome(): string { return this._nome; }
  get email(): string { return this._email; }
  get senha(): string { return this._senha; }
  get cpf(): string { return this._cpf; }
  get matricula(): string { return this._matricula; }
  get role(): UserRole { return this._role; }
  get status(): UserStatus { return this._status; }
  get ultimoLogin(): Date | null { return this._ultimoLogin; }
  get tentativasLogin(): number { return this._tentativasLogin; }
  get updatedAt(): Date { return this._updatedAt; }

  constructor(props: CreateUserProps & Partial<Omit<UserProps, keyof CreateUserProps>>) {
    if (!props.id) {

      const validated = createUserSchema.parse(props);
      this._nome = this.formatName(validated.nome);
      this._email = this.normalizeEmail(validated.email);
      this._cpf = validated.cpf;
      this._matricula = validated.matricula;
      this._senha = validated.senha;
      this._role = validated.role;

      this.id = randomUUID();
      this.createdAt = new Date();
      this._updatedAt = new Date();
      this._status = UserStatus.PENDENTE;
      this._ultimoLogin = null;
      this._tentativasLogin = 0;
    } else {

      this.id = props.id;
      this._nome = props.nome!;
      this._email = props.email!;
      this._senha = props.senha!;
      this._cpf = props.cpf!;
      this._matricula = props.matricula!;
      this._role = props.role!;
      this._status = props.status!;
      this._ultimoLogin = props.ultimoLogin ?? null;
      this._tentativasLogin = props.tentativasLogin ?? 0;
      this.createdAt = props.createdAt!;
      this._updatedAt = props.updatedAt!;
    }
  }

  private formatName(nome: string): string {
    return nome.trim().replace(/\s+/g, " ");
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }

  public isAdmin(): boolean {
    return this._role === UserRole.ADMIN;
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this._nome,
      email: this._email,
      cpf: this._cpf,
      matricula: this._matricula,
      role: this._role,
      status: this._status,
      ultimoLogin: this._ultimoLogin,
      tentativasLogin: this._tentativasLogin,
      createdAt: this.createdAt,
      updatedAt: this._updatedAt,
    };
  }

  // Métodos de negócio
  public ativar(): void {
    if (this._status === UserStatus.ATIVO) throw new Error("Usuário já está ativo");
    this._status = UserStatus.ATIVO;
    this._updatedAt = new Date();
  }

  public desativar(): void {
    if (this._status === UserStatus.INATIVO) throw new Error("Usuário já está inativo");
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