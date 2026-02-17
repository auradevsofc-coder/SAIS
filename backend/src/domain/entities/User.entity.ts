import { email, string } from "zod";

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    PROFESSOR = 'professor',
    ALUNO = 'aluno'
}

export enum UserStatus {
    ATIVO = 'ativo',
    INATIVO = 'inativo',
    AUSENTE = 'ausente',
    BANIDO = 'banido',
    PENDENTE = 'pendente'
}

export class User {

    private _id: string;
    private _nome: string;
    private _email: string;
    private _senha: string;
    private _Cpf: string;
    private _Matricula: number;
    private _role: UserRole;
    private _status: UserStatus;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _UltimoLogin: Date | null;
    private _TentativasLogin: number;
    
    //Metodo construtor, quem mecher é gay
    constructor(nome: string, email: string, senha: string, Cpf: string, matricula: string) {
    this.validateNome(nome);
    this.validateEmail(email);
    this.validateSenha(senha);
    this.validateCpf(Cpf);
    this.validateMatricula(matricula);
    
    this._id = crypto.randomUUID();
    this._nome = this.formatName(nome);
    this._email = this.normalizeEmail(email);
    this._Cpf = this.formatCpf(Cpf);
    this._Matricula = this.formatMatricula(matricula)
    this._senha = senha; 
    this._role = UserRole.USER; 
    this._status = UserStatus.PENDENTE;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._UltimoLogin = null;
    this._TentativasLogin = 0;
}

//Funções de validação

private validateNome(nome: string ) : void {
    if (!nome || nome.trim().length < 3) {
        throw new Error(`Nome deve ter pelo menos 3 caracteres`)
    }
    if(nome.length > 150){
        throw new Error(`Nome deve ter menos de 150 caracteres`)
    }
     if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
      throw new Error('Nome deve conter apenas letras e espaços');
    }
    
}
private validateEmail(email: string) : void{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email) ) {
        throw new Error(`Email invalido`)
    }
    if(email.length < 10){
        throw new Error('Pequeno Demais')
    }
    if(email.length > 250){
        throw new Error('Grande Demais')
    }
}
private validateSenha( senha: string) : void {
    if(senha.length < 6) {
        throw new Error('Senha deve possuir pelo menos 6 caracteres')
    }
    if(senha.length > 15) {
        throw new Error('Senha deve possuir pelo no máximo 14 caracteres')
    }
    if (!/[A-Z]/.test(senha)) {
      throw new Error('Senha deve conter pelo menos uma letra maiúscula');
    }
    if (!/[0-9]/.test(senha)) {
      throw new Error('Senha deve conter pelo menos um número');
    }
    
}
private validateCpf(Cpf : string) : void {
    const cleanCpf = Cpf.replace(/\D/g, '');
    if (!/^\d+$/.test(Cpf)) {
    throw new Error('CPF deve conter apenas números');
  }
    if (/[^0-9]/.test(Cpf)) {
    throw new Error('CPF deve conter apenas números');
  }
   if (cleanCpf.length !== 11) {
    throw new Error('CPF deve ter 11 dígitos');
  }
  
}
private validateMatricula(matricula : string) : void {
    const cleanMatricula = matricula.replace(/\D/g, '');

     if (/[^0-9]/.test(matricula)) {
    throw new Error('Matricula deve conter apenas números');
  }
     if (cleanMatricula.length !== 11) {
    throw new Error('Matricula deve conter 6 digitos');
  }
}
//Formatadores 

}
