import { useState } from "react";
import { useEffect } from "react";
//Styles
import * as Styles from "./styles";
//Components
import ProductItem from "../product-item";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the data");
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
        console.log(products);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Carregando</h1>;
  }
  if (error) {
    return <h1>Erro: {error}</h1>;
  }
  return (
    <Styles.ProductListContainer>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Styles.ProductListContainer>
  );
}

export default ProductList;
