import React from "react";

import Head from "../components/Head";
import { Main } from "../styles/pages/home";

export function Home(): JSX.Element {
  return (
    <>
      <Head title="Home | app-commerce." description="Listagem de produtos do app-commerce."/>
      <Main>
        <div className="container">
          <h1>Home</h1>
        </div>
      </Main>
    </>
  )
}