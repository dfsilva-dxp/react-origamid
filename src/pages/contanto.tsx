import React from "react";
import Head from "../components/Head";

import * as S from "../styles/pages/contato";

const Contanto = (): JSX.Element => {
  return (
    <>
      <Head title="Contato | app-commerce." description="Listagem de produtos do app-commerce."/>
      <S.Main>
        <div className="container">
          <h1>Contato</h1>
        </div>
      </S.Main>
    </>
  )
}

export default Contanto;