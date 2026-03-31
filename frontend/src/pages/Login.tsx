import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import logoSais from '../assets/imagem_sais.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { PasswordInput} from '../components/PasswordInput';

export function Login() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (matricula === 'aluno123' && senha === 'senha123') {
      toast.success('Login realizado!', { description: 'Bem-vindo, Aluno!' });
      navigate('/boletim');
    } else {
      toast.error('Erro', { description: 'Matrícula ou senha inválidos' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <main className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 border border-slate-200/60">
        <form onSubmit={handleLogin}> 
          
          <div className="flex justify-center mb-6">
            <img src={logoSais} alt="Logo SAIS" className="w-24 h-24 rounded-full object-cover shadow-md hover:scale-105 transition-transform" />
          </div>

          <h1 className="text-2xl font-bold text-center text-slate-800">S.A.I.S</h1>
          <p className="text-sm text-center text-slate-500 mb-8">Sistema Acadêmico Integrado</p>

          <Input
          label="Matricula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          placeholder="Digite sua Matricula"
          />

          <PasswordInput
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          />

          <div className="bottom-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Lembrar-me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Esqueceu a senha?
            </a>
          </div>

          <Button type="submit">Acessar Sistema</Button>

          <div className="text-center text-sm text-slate-600 mt-6">
            <p>
              Não tem acesso? <a href="/register" className="text-blue-600 hover:underline font-medium">Solicitar Credenciais</a>
            </p>
          </div>

          <hr className="my-6 border-slate-200" />

          <div className="text-center text-xs text-slate-500">
            <p className="mb-1">Ao fazer login, você concorda com os</p>
            <div className="flex justify-center gap-1">
              <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a>
              <span>e</span>
              <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
