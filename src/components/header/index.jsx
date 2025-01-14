import React, { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/user/actions";
//Components
import Cart from "../cart";
import Auth from "../auth";
//Styles
import * as Styles from "./styles";

function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const handleCartClick = () => setIsOpenCart(!isOpenCart);

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const handleLoginClick = () => setIsOpenLogin(!isOpenLogin);

  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Styles.Container>
      <Styles.Logo>React Shop</Styles.Logo>
      <Styles.Buttons>
        {user ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Cart</div>
      </Styles.Buttons>
      <Auth isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
      <Cart isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
    </Styles.Container>
  );
}

export default Header;
