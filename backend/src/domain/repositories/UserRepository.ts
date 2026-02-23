import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User, UserRole, UserStatus } from '../../domain/entities/User.entity';

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { email }
    });
    if (!prismaUser) return null;
    return this.mapToDomain(prismaUser);
  }

  async create(user: User): Promise<User> {
    const prismaUser = await this.prisma.user.create({
      data: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        cpf: user.cpf,
        matricula: user.matricula,
        role: user.role,        
        status: user.status,    
        ultimoLogin: user.ultimoLogin,
        tentativasLogin: user.tentativasLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    });
    return this.mapToDomain(prismaUser);
  }

  private mapToDomain(prismaUser: PrismaUser): User {
    
    return new User({
      id: prismaUser.id,
      nome: prismaUser.nome,
      email: prismaUser.email,
      senha: prismaUser.senha,
      cpf: prismaUser.cpf,
      matricula: prismaUser.matricula,
      role: prismaUser.role as UserRole,
      status: prismaUser.status as UserStatus,
      ultimoLogin: prismaUser.ultimoLogin,
      tentativasLogin: prismaUser.tentativasLogin,
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt,
    });
  }
}