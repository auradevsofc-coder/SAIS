import { useState } from "react";

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput({value, onChange}: Props) {
    const[mostrarSenha, setMostrarSenha] = useState(false);
    return(
        <div className="input-group">
            <label>Senha</label>
            
            <div className="input-box">
            <input
            type={mostrarSenha ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder="Digite sua senha"
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
    );

}