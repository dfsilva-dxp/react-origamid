import { TiPlus } from "react-icons/ti";

import * as S from "./styles";

export function NewTransactionButton() {
  return (
    <S.Button>
      <TiPlus />
      <span>Nova Transação</span>
    </S.Button>
  );
}
