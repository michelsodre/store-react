import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart-selector";
//Styles
import * as Styles from "./styles";
//Components
import CartItem from "../cart-item";

const Cart = ({ isOpen, setIsOpen }) => {
  const handleEscapeAreaClick = () => setIsOpen(false);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const CartTotal = useSelector(selectCartTotal);
  return (
    <Styles.CartContainer isOpen={isOpen}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Your Cart</Styles.CartTitle>
        <p>R$ {CartTotal}</p>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
