import * as S from "./styles";

interface DefaultButtonProps {
  children: string;
}

export function DefaultButton({ children }: DefaultButtonProps) {
  return <S.Button>{children}</S.Button>;
}
