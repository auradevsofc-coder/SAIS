import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User, UserRole } from '../../../domain/entities/User.entity';
import { hash } from 'bcryptjs';
import { z } from 'zod';


const registerSchema = z.object({
  nome: z.string().min(3).max(150),
  email: z.string().email(),
  senha: z.string().min(6).max(15).regex(/[A-Z]/).regex(/[0-9]/),
  cpf: z.string().length(11).regex(/^\d+$/),
  matricula: z.string().length(6).regex(/^\d+$/),
  role: z.enum(['ADMIN', 'PROFESSOR', 'ALUNO']).default('ALUNO')
});

type RegisterRequest = z.infer<typeof registerSchema>;

// Tipo de retorno: omitir senha e outros campos sensíveis? A entidade tem um método toJSON que já omite a senha.
export class RegisterUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(data: RegisterRequest): Promise<ReturnType<User['toJSON']>> {
  console.log('Dados recebidos:', JSON.stringify(data, null, 2));
    const validated = registerSchema.parse(data);

    // 2. Verificar se o e-mail já existe
    const existingUser = await this.userRepo.findByEmail(validated.email);
    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }

    // 3. Hash da senha (Talvez isso que esteja dando o erro na hora do cadastro, eu sla)
    const hashedPassword = await hash(validated.senha, 10);

    // 4. Criar a entidade User (as props devem corresponder ao construtor)
   const user = new User({
  nome: validated.nome,
  email: validated.email,
  senha: hashedPassword,
  cpf: validated.cpf,
  matricula: validated.matricula,
  role: validated.role as UserRole, // adicionar "as UserRole" para garantir que o tipo seja correto
});

    // 5. Persistir no repositório
    const savedUser = await this.userRepo.create(user);

    // 6. Retornar os dados públicos (usando toJSON)
    return savedUser.toJSON();
  }
}

