//Styles
import * as Styles from "./styles";

const Cart = ({ isOpen, setIsOpen }) => {
  const handleEscapeAreaClick = () => setIsOpen(false);

  return (
    <Styles.CartContainer isOpen={isOpen}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Your Cart</Styles.CartTitle>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
