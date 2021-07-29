import React, { createContext, ReactElement, useState } from "react";

import { api } from "../services/api";
import {Product} from "../types/types"

interface ProductsContextData {
  getAllProducts: () => Promise<Product[]>;
  getProduct: (id: string) => Promise<Product>;
  loading: boolean;
}

const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactElement;
  
}

function ProductsContextProvider({children}: ProductsContextProviderProps): JSX.Element {
  const [loading, setLoading] = useState(false)

  async function getAllProducts() {
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

  async function getProduct(id: string) {
    try {
      setLoading(true)
      const response = await api.get(`produto/${id}`).then(({data}): Promise<Product> => data)
      return response
    } catch (err) {
      throw new Error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProductsContext.Provider value={{getAllProducts, getProduct, loading}}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsContextProvider }