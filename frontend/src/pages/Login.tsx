import React, { useState, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logoSais from '../assets/imagem_sais.png';

export function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (matricula === 'aluno123' && senha === 'senha123') {
      toast.success('Login realizado!', { description: 'Bem-vindo, Aluno!' });
      navigate('/boletim');
    } else if (matricula === 'admin' && senha === 'admin123') {
      toast.success('Login admin realizado!', { description: 'Bem-vindo, Admin!' });
      navigate('/boletim');
    } else {
      toast.error('Erro', { description: 'Matrícula ou senha inválidos' });
    }
  };

  return (
    <div className="wrapper">
      <main className="container">
        <form onSubmit={handleLogin}>
          <div className="logo-container">
            <img src={logoSais} alt="Logo SAIS" className="main-logo" />
          </div>

          <h1>S.A.I.S</h1>
          <p className="subtitulo-login">Sistema de Apoio Institucional</p>

          <div className="input-group">
            <label>Matrícula / Usuário</label>
            <div className="input-box">
              <input
                placeholder="Digite seu usuário"
                type="text"
                value={matricula}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Senha</label>
            <div className="input-box">
              <input
                placeholder="••••••••"
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Container corrigido para alinhar as extremidades */}
          <div className="bottom-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Lembrar-me</span>
            </label>
            <a href="#" className="forgot-link">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Acessar Sistema
          </button>

          <div className="register-link">
            <p>
              Não tem acesso? <a href="/register">Solicitar Credenciais</a>
            </p>
          </div>

          <hr className="divider" />

          <div className="footer-links">
            <p>Ao fazer login, você concorda com os</p>
            <div className="policy-row">
              <a href="#">Termos de Uso</a>
              <span>e</span>
              <a href="#">Política de Privacidade</a>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
