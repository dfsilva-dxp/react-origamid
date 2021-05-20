import { ChangeEvent } from "react";
import * as S from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  value: string | number;
  handleChange: (e: ChangeEvent<{ value: string }>) => void;
}

export function Input({ type, placeholder, value, handleChange }: InputProps) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
