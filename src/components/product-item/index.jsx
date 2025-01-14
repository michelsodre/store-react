//Style
import { useDispatch } from "react-redux";
import * as Styles from "./styles";
import { addToCart } from "../../redux/cart/actions";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Product added to cart");
  };
  return (
    <Styles.ProductItemContainer>
      <Styles.ProductImage src={product.thumbnail} alt={product.title} />
      <Styles.ProductTitle>{product.title}</Styles.ProductTitle>
      <Styles.ProductPrice>{product.price}</Styles.ProductPrice>
      <Styles.AddToCartButton onClick={handleAddToCart}>
        Add to Cart
      </Styles.AddToCartButton>
    </Styles.ProductItemContainer>
  );
}
export default ProductItem;
