import { ReactElement } from "react";
import * as S from "./styles";

interface ContentProps {
  children: ReactElement;
}

export function ContentComponent({ children }: ContentProps) {
  return <S.Container>{children}</S.Container>;
}
