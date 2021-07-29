import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Head from "../components/Head";
import Spinner from "../components/Spinner";

import useProduct from "../hooks/useProduct";
import { formatPrice } from "../utils/format";
import {Product} from "../types/types"

import * as S from "../styles/pages/produto";


const Produto = (): JSX.Element => {
  const [product, setProduct] = useState<Product>({} as Product);

  const {getProduct, loading} = useProduct()
  const {id} = useParams();

  useEffect(() => {
    (async(id) => {
      const response = await getProduct(id);
      const {preco} = response;

      const price = formatPrice(Number(preco))

      setProduct({
        ...response,
        preco: price
      })

    })(id)
  }, [])

  return (
    <>
      <Head title="Produto | app-commerce." description="Listagem de produtos do app-commerce."/>

      {loading ? (
        <div className="loader"><Spinner/></div>
      ) : (
        <S.Main>
          <div className="container">
            <section className="fadeLeft">
              <S.ProductInfo>
                <S.DisplayImg>
                  {product.fotos?.map((foto, i) => (
                    <img src={foto.src} alt={foto.title} key={i} />
                  ))}
                </S.DisplayImg>
                <S.DisplayInfoProduct>
                  <h2>{product.nome}</h2>
                  <span>{product.preco}</span>
                  <p>{product.descricao}</p>
                </S.DisplayInfoProduct>
              </S.ProductInfo>
            </section>
          </div>
        </S.Main>
      )}
    </>
  )
}

export default Produto;