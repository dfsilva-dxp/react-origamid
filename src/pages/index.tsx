import React , { useEffect, useState }from "react";

import Head from "../components/Head";
import ProductList from "../components/ProductList";
import Spinner from "../components/Spinner";

import useProduct from "../hooks/useProduct";
import { Product } from "../types/types"

import { Main } from "../styles/pages/home"; 

export function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([])
  const {getAllProducts, loading} = useProduct();

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProducts([...response])
    })()
  }, [])


  return (
    <>
      <Head title="Home | app-commerce." description="Listagem de produtos do app-commerce."/>
      {loading ? (
        <div className="loader"><Spinner/></div>
      ) : (
        <Main>
          <div className="container">
            <ProductList list={products}/>
          </div>
        </Main>
      )}
    </>
  )
}