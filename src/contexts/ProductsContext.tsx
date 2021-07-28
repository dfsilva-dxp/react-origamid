import React, { createContext, ReactElement, useState } from "react";
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
  getAllProducts: () => Promise<Product[]>;
  loading: boolean;
}

const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactElement;
  
}

function ProductsContextProvider({children}: ProductsContextProviderProps): JSX.Element {
  const [loading, setLoading] = useState(false)

  async function getAllProducts(): Promise<Product[]> {
    try { 
      setLoading(true);
      const response = await api.get('produto').then(({data}): Promise<Product[]> => data);
      return response;
    } catch (err) {
      throw new Error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProductsContext.Provider value={{getAllProducts, loading}}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsContextProvider }