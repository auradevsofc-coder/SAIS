import { useState, ChangeEvent } from "react";
import "./App.css";

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("Aluno");
  const [mostrarSenha, setMostrarSenha] = useState(false); // Novo estado para a senha

  const getThemeColor = () => {
    if (perfil === "Professor") return "#16a34a";
    if (perfil === "Admin") return "#8b5cf6";
    return "#2563eb";
  };

  return (
    <div className="container">
      <div className="nav-buttons">
        <button onClick={() => setPerfil("Aluno")} style={{backgroundColor: "#1e40af"}}>Aluno</button>
        <button onClick={() => setPerfil("Professor")} style={{backgroundColor: "#16a34a"}}>Professor</button>
        <button onClick={() => setPerfil("Admin")} style={{backgroundColor: "#8b5cf6"}}>Admin</button>
      </div>

      <div className="login-box">
        <div className="icon-circle" style={{backgroundColor: getThemeColor()}}>🎓</div>
        <h2 style={{margin: "5px 0"}}>SAIS {perfil}</h2>
        <p style={{fontSize: "13px", color: "#666", marginBottom: "15px"}}>Acesse o portal do {perfil}</p>

        <input
          type="text"
          placeholder={"Matrícula do " + perfil}
          value={matricula}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
        />

        {/* Div para segurar o input e o botão do olho juntos */}
        <div className="password-input" style={{position: "relative", width: "100%"}}>
          <input
            type={mostrarSenha ? "text" : "password"} // Troca o tipo aqui!
            placeholder="Sua senha"
            value={senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
            style={{paddingRight: "45px"}}
          />
          <button 
            type="button" 
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className="eye-button"
            style={{
              position: "absolute", 
              right: "10px", 
              top: "50%", 
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px"
            }}
          >
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>

        <button 
          className="btn-entrar" 
          style={{backgroundColor: getThemeColor(), marginTop: "20px"}}
          onClick={() => alert("Entrando como " + perfil)}
        >
          Entrar como {perfil}
        </button>

        <p style={{fontSize: "11px", marginTop: "15px", color: "#999"}}>
          Ambiente Seguro de Saúde © 2026
        </p>
      </div>
    </div>
  );
}
