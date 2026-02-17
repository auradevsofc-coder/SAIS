import { useState, ChangeEvent } from "react";
import "./App.css";

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("Aluno"); // Começa como Aluno

  // Função para mudar a cor do tema baseada no perfil selecionado
  const getThemeColor = () => {
    if (perfil === "Professor") return "#16a34a"; // Verde
    if (perfil === "Admin") return "#8b5cf6"; // Roxo
    return "#2563eb"; // Azul Aluno
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
        <p style={{fontSize: "13px", color: "#666"}}>Acesse o portal do {perfil}</p>

        <input
          type="text"
          placeholder={"Matrícula do " + perfil}
          value={matricula}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMatricula(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
        />

        <button 
          className="btn-entrar" 
          style={{backgroundColor: getThemeColor()}}
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
