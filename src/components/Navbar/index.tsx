import { TiUserOutline } from "react-icons/ti";
import { NewTransactionButton } from "../NewTransactionButton";
import { ToggleTheme } from "../ToggleTheme";

import * as S from "./styles";

interface NavbarProps {
  onOpenNewTransactionModal: () => void;
}

export function Navbar({ onOpenNewTransactionModal }: NavbarProps) {
  return (
    <S.Navbar>
      <ToggleTheme />
      <div className="wrap">
        <NewTransactionButton
          onOpenNewTransactionModal={onOpenNewTransactionModal}
        />

        <div className="profile">
          <div className="avatar">
            <TiUserOutline />
          </div>
          <p>Daniel Silva</p>
        </div>
      </div>
    </S.Navbar>
  );
}
