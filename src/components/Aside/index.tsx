import { MdAttachMoney } from "react-icons/md";
import {
  TiChartAreaOutline,
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiPower,
} from "react-icons/ti";
import ReactTooltip from "react-tooltip";

import logo from "../../assets/balance.svg";

import * as S from "./styles";

export function Aside() {
  return (
    <S.Aside>
      <div className="logo">
        <img src={logo} alt="Logotipo Minha Carteira" />
      </div>
      <nav>
        <ul>
          <li>
            <a className="active">
              <TiChartAreaOutline data-tip data-for="dashboard" />
              <ReactTooltip
                id="dashboard"
                place="right"
                type="dark"
                effect="float"
              >
                Dashboard
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a>
              <MdAttachMoney data-tip data-for="register" />
              <ReactTooltip
                id="register"
                place="right"
                type="dark"
                effect="float"
              >
                Novo Regístro
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a>
              <TiArrowUpOutline data-tip data-for="deposit" />
              <ReactTooltip
                id="deposit"
                place="right"
                type="dark"
                effect="float"
              >
                Entradas
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a>
              <TiArrowDownOutline data-tip data-for="withdraw" />
              <ReactTooltip
                id="withdraw"
                place="right"
                type="dark"
                effect="float"
              >
                Saídas
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a>
              <TiPower data-tip data-for="logout" />
              <ReactTooltip
                id="logout"
                place="right"
                type="dark"
                effect="float"
              >
                Logout
              </ReactTooltip>
            </a>
          </li>
        </ul>
      </nav>
    </S.Aside>
  );
}
