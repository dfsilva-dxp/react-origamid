import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

type Photos = {
  title: string;
  src: string;
}

type Product = {
  id: string;
  fotos: Photos[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;
}

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