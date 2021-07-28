import React from "react";
import { useParams } from "react-router-dom";

import Head from "../components/Head";

import * as S from "../styles/pages/produto";

const Produto = (): JSX.Element => {
  const {id} = useParams();

  return (
    <>
      <Head title="Produto | app-commerce." description="Listagem de produtos do app-commerce."/>
      <S.Main>
        <div className="container">
          <h1>Produto: {id}</h1>
        </div>
      </S.Main>
    </>
  )
}

export default Produto;