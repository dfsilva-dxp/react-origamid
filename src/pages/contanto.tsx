import React from "react";
import Head from "../components/Head";

import contact_us from "../assets/contact_us.png"

import * as S from "../styles/pages/contato";

const Contanto = (): JSX.Element => {
  return (
    <>
      <Head title="Contato | app-commerce." description="Listagem de produtos do app-commerce."/>
      <S.Main>
        <div className="container">
          <S.Display className="fadeLeft">
            <S.ImgCard style={{ background: `url(${contact_us}) no-repeat local 50% 50%`, backgroundSize: "cover"}} />
            <S.ContactInfo>
              <h1>Vamos conversar?</h1>
              <ul>
                <li>daniel@gmail.com</li>
                <li>11 9 8380-4055</li>
                <li>Av. Pres. Kenedy - Sesc</li>
              </ul>
            </S.ContactInfo>
          </S.Display>
        </div>
      </S.Main>
    </>
  )
}

export default Contanto;