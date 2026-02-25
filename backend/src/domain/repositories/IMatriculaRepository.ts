import { Matricula } from "../entities/Matricula.entity";

export interface IMatriculaRepository {
  findbyMatricula(matricula: string): Promise<Matricula | null>;
  create(
    data: Omit<Matricula, "id" | "createdAt" | "updatedAt">,
  ): Promise<Matricula>;
}
