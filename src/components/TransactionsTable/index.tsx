import { FilterControllers } from "../FilterControllers";
import { TiTrash } from "react-icons/ti";

import * as S from "./styles";

export function TransactionsTable() {
  return (
    <S.Container>
      <FilterControllers title="Entradas" />
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
          <tr className="any">
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
