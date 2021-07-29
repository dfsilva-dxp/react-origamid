import { useContext } from "react";

import { ProductsContext } from "../contexts/ProductsContext";
import {Product} from "../types/types"

interface ProductsContextData {
  getAllProducts: () => Promise<Product[]>;
  getProduct: (id: string) => Promise<Product>;
  loading: boolean;
}

const useProduct = (): ProductsContextData => useContext(ProductsContext);

export default useProduct;