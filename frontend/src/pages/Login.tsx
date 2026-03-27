import React, { useState, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import logoSais from '../assets/imagem_sais.png';

export function Login() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Matrícula / Usuário</label>
            <div className="relative">
              <input
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Digite seu usuário"
                type="text"
                value={matricula}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
            <div className="relative">
              <input
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all pr-12"
                placeholder="••••••••"
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-slate-500 hover:text-slate-700 transition-colors"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mb-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 hover:text-slate-800 transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span>Lembrar-me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
            Acessar Sistema
          </button>

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