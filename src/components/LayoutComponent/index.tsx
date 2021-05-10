import { ReactElement } from "react";
import { Aside } from "../Aside";
import { ContentComponent } from "../ContentComponent";
import { Navbar } from "../Navbar";

import * as S from "./styles";

interface LayoutProps {
  children: ReactElement;
}

export function LayoutComponent({ children }: LayoutProps) {
  return (
    <S.Container>
      <Navbar />
      <Aside />
      <ContentComponent>{children}</ContentComponent>
    </S.Container>
  );
}
