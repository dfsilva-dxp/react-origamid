import * as S from "./styles";

interface DefaultButtonProps {
  children: string;
  type: "submit" | "button";
}

export function DefaultButton({ children, type }: DefaultButtonProps) {
  return <S.Button type={type}>{children}</S.Button>;
}
