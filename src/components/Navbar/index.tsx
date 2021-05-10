import { TiUserOutline } from "react-icons/ti";
import { NewTransactionButton } from "../NewTransactionButton";
import { ToggleTheme } from "../ToggleTheme";

import * as S from "./styles";

export function Navbar() {
  return (
    <S.Navbar>
      <ToggleTheme />
      <div className="wrap">
        <NewTransactionButton />

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
