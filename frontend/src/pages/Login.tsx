import React, { useState } from "react";
import { toast } from "sonner";
import "../App.css";

export function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (matricula === "aluno123" && senha === "senha123") {
      toast.success("Login realizado!", { description: "Bem-vindo, Aluno!" });
    } else {
      toast.error("Erro", { description: "Matrícula ou senha inválidos" });
    }
  };

  return (
    <div className="container">
      <div className="nav-buttons">
        <button onClick={() => alert("Módulo Aluno")}>Ver Boletim</button>
        <button onClick={() => alert("Módulo Professor")}>Dashboard Prof</button>
        <button onClick={() => alert("Módulo Admin")}>Dashboard Admin</button>
      </div>

      <div className="login-box">
        <div className="icon-circle">🎓</div>
        <h2>S.A.I.S</h2>
        <p>Entre com suas credenciais institucionais</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" className="btn-entrar">Entrar</button>
        </form>
      </div>
    </div>
  );
}
