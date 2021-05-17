import { TiPlus } from "react-icons/ti";

import * as S from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function NewTransactionButton({
  onOpenNewTransactionModal,
}: HeaderProps) {
  return (
    <>
      <S.Button onClick={onOpenNewTransactionModal}>
        <TiPlus />
        <span>Nova Transação</span>
      </S.Button>
    </>
  );
}
