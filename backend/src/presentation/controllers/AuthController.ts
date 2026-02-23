import { Request, Response } from 'express';
import { RegisterUseCase } from '../../application/use-cases/auth/RegisterUseCase';
import { ZodError } from 'zod';

export class AuthController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.registerUseCase.execute(req.body);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        const flattened = error.flatten();
        return res.status(400).json({
          error: 'Dados inválidos',
          details: flattened.fieldErrors
        });
      }
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}