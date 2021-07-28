import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

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

const useProduct = (): ProductsContextData => useContext(ProductsContext);

export default useProduct;