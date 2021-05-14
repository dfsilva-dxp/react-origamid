import * as S from "./styles";

interface titleFormProps {
  children: string;
}

export function TitleForm({ children }: titleFormProps) {
  return <S.Title>{children}</S.Title>;
}
