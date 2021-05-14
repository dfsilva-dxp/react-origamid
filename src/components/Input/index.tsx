import * as S from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return <S.Input type={type} placeholder={placeholder} />;
}
