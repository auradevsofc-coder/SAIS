import { useState, ChangeEvent } from "react";
import logoSais from "./assets/imagem_sais.png";
import "./App.css";

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [logado, setLogado] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    /* Validando o usuário admin123 */
    if (matricula === "admin123" && senha === "123") {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  if (logado) {
    return (
      <div className="dashboard-wrapper">
        <header className="dash-nav">
          <div className="logo-group">
            <img src={logoSais} alt="Sais" className="mini-logo" />
            <div>
              <h3>S.A.I.S</h3>
              <span>Sistema Acadêmico Integrado</span>
            </div>
          </div>
          <button className="exit-btn" onClick={() => setLogado(false)}>Sair</button>
        </header>

        <main className="dash-container">
          <section className="user-card">
            <div className="avatar">JS</div>
            <div className="user-info">
              <h2>Guilherme Silva da Cruz</h2>
              <p>Matrícula: <strong>admin123</strong></p>
            </div>
            <div className="course-info">
              <p>Curso: <strong>Desenvolvimento Web</strong></p>
              <p>Período: <strong>4º Período</strong></p>
            </div>
          </section>

          <section className="boletim-card">
            <div className="boletim-header-blue">
              <h4>Boletim Escolar</h4>
              <span>Ano Letivo 2026</span>
            </div>
            
            <table className="boletim-table">
              <thead>
                <tr>
                  <th>DISCIPLINA</th>
                  <th>1º BIM</th>
                  <th>MÉDIA</th>
                  <th>FALTAS</th>
                  <th>SITUAÇÃO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Programação C#</td>
                  <td>9.5</td>
                  <td>9.5</td>
                  <td>2</td>
                  <td><span className="status-ok">Aprovado</span></td>
                </tr>
                <tr>
                  <td>Front-End Avançado</td>
                  <td>10.0</td>
                  <td>10.0</td>
                  <td>0</td>
                  <td><span className="status-ok">Aprovado</span></td>
                </tr>
                <tr>
                  <td>Banco de Dados</td>
                  <td>8.5</td>
                  <td>8.5</td>
                  <td>3</td>
                  <td><span className="status-ok">Aprovado</span></td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    );
  }

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
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
              <button type="button" className="eye-btn" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn">Acessar Sistema</button>
        </form>
      </main>
    </div>
  );
}
