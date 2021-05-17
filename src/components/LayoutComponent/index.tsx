import { ReactElement, useState } from "react";
import { Aside } from "../Aside";
import { ContentComponent } from "../ContentComponent";
import { Navbar } from "../Navbar";
import { NewTransactionModal } from "../NewTransactionModal";

import * as S from "./styles";

interface LayoutProps {
  children: ReactElement;
}

export function LayoutComponent({ children }: LayoutProps) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <S.Container>
      <Navbar onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Aside />
      <ContentComponent>{children}</ContentComponent>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        handleOnRequestClose={handleCloseNewTransactionModal}
      />
    </S.Container>
  );
}
