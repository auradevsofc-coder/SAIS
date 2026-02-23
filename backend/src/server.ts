import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { UserRepository } from './infrastructure/repositories/UserRepository';
import { RegisterUseCase } from './application/use-cases/auth/RegisterUseCase';
import { AuthController } from './presentation/controllers/AuthController';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Dependências
const prisma = new PrismaClient();
const userRepo = new UserRepository(prisma);
const registerUseCase = new RegisterUseCase(userRepo);
const authController = new AuthController(registerUseCase);

// Rotas
app.post('/api/auth/register', (req, res) => authController.register(req, res));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API SAIS funcionando!' });
});

app.listen(port, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});