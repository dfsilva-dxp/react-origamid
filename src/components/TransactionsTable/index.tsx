import { useState, ChangeEvent } from "react";
import { FilterControllers } from "../FilterControllers";
import { TiTrash } from "react-icons/ti";

import * as S from "./styles";

export function TransactionsTable() {
  const [radio, setRadioValue] = useState("any");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setRadioValue(e.target.value);
  }
  return (
    <S.Container>
      <FilterControllers title="Entradas" />
      <S.NavFilterTransaction>
        <ul>
          <input
            type="radio"
            name="condition"
            value="any"
            id="any"
            checked={radio === "any"}
            onChange={handleChange}
          />
          <label htmlFor="any">
            <li>All</li>
          </label>
          <input
            type="radio"
            name="condition"
            value="recurrent"
            id="recurrent"
            onChange={handleChange}
          />
          <label htmlFor="recurrent">
            <li>Recurrent</li>
          </label>
          <input
            type="radio"
            name="condition"
            value="eventual"
            id="eventual"
            onChange={handleChange}
          />
          <label htmlFor="eventual">
            <li>Eventual</li>
          </label>
        </ul>
      </S.NavFilterTransaction>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr className="recurrent">
            <td>IPVA</td>
            <td className="deposit">R$2500,00</td>
            <td>Carro</td>
            <td>22/10/2021</td>
            <td>
              <TiTrash />
            </td>
          </tr>
          <tr className="eventual">
            <td>IPVA</td>
            <td className="deposit"> R$2500,00</td>
            <td>Carro</td>
            <td>22/10/2021</td>
            <td>
              <TiTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
