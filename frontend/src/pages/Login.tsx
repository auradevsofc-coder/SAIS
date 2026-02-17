import { useState } from "react";
import { toast } from "sonner";

export function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Sucesso!", { description: "Você logou como " + email });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h1 style={{ color: "#2563eb", marginBottom: "20px" }}>SAIS - Login</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
