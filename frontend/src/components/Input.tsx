import { ChangeEvent } from "react";

interface InputProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
}

export function Input({
    label,
    value,
    onChange,
    type= "text",
    placeholder,
}: InputProps) {
    return(
    <div className="input-group">
                <label>{label}</label>

            <div className="input-box">
                    <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    />
                </div>
            </div>
    )
}