import React from 'react';
import { Link } from 'react-router-dom';

import {Product} from "../../types/types"

import * as S from './styled';

interface ProductListProps {
  list: Product[];
}

const ProductList = ({list}: ProductListProps): JSX.Element => {
  return (
    <S.List className="fadeLeft">
      {list && list.map((product) => (
        <S.Product key={product.id}>
          <Link to={`produto/${product.id}`}>
            <img src={product.fotos[0].src} alt={product.fotos[0].title} />
            <h4>{product.nome}</h4>
          </Link>
        </S.Product>
      ))}
    </S.List>
  );
}

export default ProductList;