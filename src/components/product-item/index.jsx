//Style
import * as Styles from "./styles";

function ProductItem({ product }) {
  return (
    <Styles.ProductItemContainer>
      <Styles.ProductImage src={product.thumbnail} alt={product.title} />
      <Styles.ProductTitle>{product.title}</Styles.ProductTitle>
      <Styles.ProductPrice>{product.price}</Styles.ProductPrice>
      <Styles.AddToCartButton>Add to Cart</Styles.AddToCartButton>
    </Styles.ProductItemContainer>
  );
}
export default ProductItem;
