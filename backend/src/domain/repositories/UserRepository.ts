import { PrismaClient } from "@prisma/client";
import { UserRepositoryImpl as IUserRepository } from "../../domain/repositories/UserRepository";
import { User, UserRole, UserStatus } from "../../domain/entities/User.entity";

export class UserRepositoryImpl implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { email },
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
      },
    });

    return this.mapToDomain(prismaUser);
  }

  async findById(id: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!prismaUser) return null;
    return this.mapToDomain(prismaUser);
  }

  async update(id: string, userData: Partial<User>): Promise<User> {
    const prismaUser = await this.prisma.user.update({
      where: { id },
      data: userData,
    });

    return this.mapToDomain(prismaUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  private mapToDomain(prismaUser: any): User {
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
