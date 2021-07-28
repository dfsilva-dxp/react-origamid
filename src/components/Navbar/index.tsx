import { NavLink } from "react-router-dom";

import * as S from "./styled";

const Navbar = () => {
  return <S.Header>
    <div className="container">
      <S.NavContent>
        <S.Logo>
          <h4>app-commerce</h4>
        </S.Logo>
        <S.Nav>
          <NavLink to="/" end>Produtos</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </S.Nav>
      </S.NavContent>
    </div>
  </S.Header>;
}

export default Navbar;