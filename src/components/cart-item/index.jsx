import * as Styles from "./styles";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product.id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.id));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  };
  useEffect(() => {
    console.log("CartItem rendered");
  }, [product]);
  return (
    <Styles.CartProduct key={product.id}>
      <Styles.CartSessionRow>
        <Styles.CartSessionColumn>
          <Styles.CartProductImage
            src={product.thumbnail}
            alt={product.title}
          />
        </Styles.CartSessionColumn>
        <Styles.CartSessionColumn>
          <Styles.CartSessionRow>
            <Styles.CartProductTitle>{product.title}</Styles.CartProductTitle>
            <Styles.CartProductPrice>{product.price}</Styles.CartProductPrice>
          </Styles.CartSessionRow>
          <Styles.CartSessionRow>
            <Styles.AddOrRemoveButton onClick={handleDecreaseQuantity}>
              -
            </Styles.AddOrRemoveButton>
            <Styles.CartProductQuantity>
              Quantity: {product.quantity}
            </Styles.CartProductQuantity>
            <Styles.AddOrRemoveButton onClick={handleIncreaseQuantity}>
              +
            </Styles.AddOrRemoveButton>
            <Styles.CartProductRemove onClick={handleRemoveProduct}>
              Remove
            </Styles.CartProductRemove>
          </Styles.CartSessionRow>
        </Styles.CartSessionColumn>
      </Styles.CartSessionRow>
    </Styles.CartProduct>
  );
};

export default CartItem;
