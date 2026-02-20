import { useState, ChangeEvent } from "react";
import logoSais from "./assets/imagem_sais.png";
import "./App.css";

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="wrapper">
      <main className="container">
        <form onSubmit={(e) => e.preventDefault()}>
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
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
              <button 
                type="button" 
                className="eye-btn"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Container corrigido para alinhar as extremidades */}
          <div className="bottom-options">
            <label className="remember">
              <input type="checkbox" /> 
              <span>Lembrar-me</span>
            </label>
            <a href="#" className="forgot-link">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="login-btn">
            Acessar Sistema
          </button>

          <div className="register-link">
            <p>Não tem acesso? <a href="#">Solicitar Credenciais</a></p>
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
/* ... código anterior ... */
          <div className="register-link">
            <span>Não tem acesso? </span>
            <a href="#">Solicitar Credenciais</a>
          </div>
/* ... restante do código ... */
