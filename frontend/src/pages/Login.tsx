import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, XCircle, X } from 'lucide-react';
import logoSais from '../assets/imagem_sais.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { PasswordInput} from '../components/PasswordInput';

export function Login() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const customToast = (titulo: string, desc: string, tipo: 'sucesso' | 'erro') => {
    toast.custom((t) => (
      <div className="flex flex-col gap-2 w-72 text-xs z-50 animate-in fade-in slide-in-from-top-4">
        <div className="flex items-center justify-between w-full h-14 rounded-lg bg-[#232531] px-2.5 border border-white/5 shadow-2xl">
          <div className="flex gap-2">
            <div className={`${tipo === 'sucesso' ? 'text-[#2b9875]' : 'text-red-500'} bg-white/5 backdrop-blur-xl p-1 rounded-lg`}>
              {tipo === 'sucesso' ? <Check size={20} /> : <XCircle size={20} />}
            </div>
            <div>
              <p className="text-white font-medium">{titulo}</p>
              <p className="text-gray-500 text-[10px]">{desc}</p>
            </div>
          </div>
          <button onClick={() => toast.dismiss(t)} className="text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>
    ));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (matricula !== 'aluno123') {
      customToast('Usuário incorreto', 'Este usuário não existe.', 'erro');
      return;
    }

    if (senha !== 'senha123') {
      customToast('Senha incorreta', 'Verifique sua credencial.', 'erro');
      return;
    }

    customToast('Bem-vindo!', 'Acesso liberado ao S.A.I.S', 'sucesso');
    setTimeout(() => navigate('/boletim'), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <main className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 border border-slate-200/60">
        <form onSubmit={handleLogin}>
          <div className="flex justify-center mb-6">
            <img src={logoSais} alt="Logo SAIS" className="w-24 h-24 rounded-full object-cover shadow-md" />
          </div>

          <h1 className="text-2xl font-bold text-center text-slate-800 uppercase tracking-tight">S.A.I.S</h1>
          <p className="text-sm text-center text-slate-500 mb-8 font-medium">Sistema Acadêmico Integrado</p>

          <div className="mb-4 text-right">
            <label className="block text-left text-sm font-medium text-slate-700 mb-1">Matrícula / Usuário</label>
            <input
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              type="text"
              required
              maxLength={20}
              value={matricula}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
            />
            <span className="text-[10px] text-slate-400">{matricula.length}/20</span>
          </div>

          <div className="mb-6 text-right">
            <label className="block text-left text-sm font-medium text-slate-700 mb-1">Senha</label>
            <div className="relative">
              <input
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-12 transition-all"
                type={mostrarSenha ? 'text' : 'password'}
                required
                maxLength={20}
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <span className="text-[10px] text-slate-400">{senha.length}/20</span>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md active:scale-[0.98] cursor-pointer">
            Acessar Sistema
          </button>
        </form>
      </main>
    </div>
  );
}
