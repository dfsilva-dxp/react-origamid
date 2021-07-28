import React, { createContext, ReactElement } from "react";
import { api } from "../services/api";


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

interface ProductsContextData {
  getAllProducts: () => Promise<Product[]>
}

const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactElement;
  
}

function ProductsContextProvider({children}: ProductsContextProviderProps): JSX.Element {

  async function getAllProducts(): Promise<Product[]> {
    const response = await api.get('produto').then(({data}): Promise<Product[]> => data);
    return response;
  }

  return (
    <ProductsContext.Provider value={{getAllProducts}}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsContextProvider }