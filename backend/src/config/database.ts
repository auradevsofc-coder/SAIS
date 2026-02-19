// backend/src/config/database.ts
export const config = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
};

import dotenv from 'dotenv';
import path from 'path';

// Carrega baseado no ambiente
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : '.env.development';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

function validateEnv() {
  const required = ['DB_PASSWORD', 'JWT_SECRET'];
  
  for (const varName of required) {
    if (!process.env[varName]) {
      throw new Error(`Variável obrigatória ${varName} não definida!`);
    }
  }
}

validateEnv();