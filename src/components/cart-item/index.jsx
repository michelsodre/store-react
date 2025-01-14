import * as Styles from "./styles";
import { removeFromCart } from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product.id));
  };
  useEffect(() => {
    console.log("CartItem rendered");
  }, [product]);
  return (
    <Styles.CartProduct key={product.id}>
      <Styles.CartProductImage src={product.thumbnail} alt={product.title} />
      <Styles.CartProductTitle>{product.title}</Styles.CartProductTitle>
      <Styles.CartProductPrice>{product.price}</Styles.CartProductPrice>
      <Styles.CartProductQuantity>
        Quantity: {product.quantity}
      </Styles.CartProductQuantity>
      <Styles.CartProductRemove onClick={handleRemoveProduct}>
        Remove
      </Styles.CartProductRemove>
    </Styles.CartProduct>
  );
};

export default CartItem;
