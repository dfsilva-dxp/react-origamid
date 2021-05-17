import {
  TiChartAreaOutline,
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiPower,
} from "react-icons/ti";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" end>
              <TiChartAreaOutline data-tip data-for="dashboard" />
              <ReactTooltip
                id="dashboard"
                place="right"
                type="dark"
                effect="float"
              >
                Dashboard
              </ReactTooltip>
            </NavLink>
          </li>
          <li>
            <NavLink to="transaction/deposit">
              <TiArrowUpOutline data-tip data-for="deposit" />
              <ReactTooltip
                id="deposit"
                place="right"
                type="dark"
                effect="float"
              >
                Deposit
              </ReactTooltip>
            </NavLink>
          </li>
          <li>
            <NavLink to="transaction/withdraw">
              <TiArrowDownOutline data-tip data-for="withdraw" />
              <ReactTooltip
                id="withdraw"
                place="right"
                type="dark"
                effect="float"
              >
                Withdraw
              </ReactTooltip>
            </NavLink>
          </li>
          <li>
            <TiPower data-tip data-for="logout" />
            <ReactTooltip id="logout" place="right" type="dark" effect="float">
              Logout
            </ReactTooltip>
          </li>
        </ul>
      </nav>
    </S.Aside>
  );
}
