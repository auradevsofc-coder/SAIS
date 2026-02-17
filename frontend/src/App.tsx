import { useState, ChangeEvent } from "react";
import logoSais from "./assets/imagem_sais.png";
import "./App.css";

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logoSais} alt="Logo SAIS" className="main-logo" />
        </div>
        
        <h2 style={{margin: "5px 0", color: "#1e40af"}}>S.A.I.S</h2>
        <p style={{fontSize: "14px", color: "#666", marginBottom: "20px"}}>
          Sistema de Apoio e Integração de Saúde
        </p>

        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
        />

        <div style={{position: "relative", width: "100%"}}>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
          />
          <button 
            type="button" 
            onClick={() => setMostrarSenha(!mostrarSenha)}
            style={{position: "absolute", right: "12px", top: "18px", background: "none", border: "none", cursor: "pointer"}}
          >
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>

        <button className="btn-entrar" onClick={() => alert("Acessando...")}>
          Acessar Sistema
        </button>
      </div>
    </div>
  );
}
