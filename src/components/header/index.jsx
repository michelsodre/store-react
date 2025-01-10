import React, { useState } from "react";
import { useSelector } from "react-redux";
//Components
import Cart from "../cart";
import Auth from "../auth";
//Styles
import * as Styles from "./styles";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCartClick = () => setIsOpen(!isOpen);

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const handleLoginClick = () => setIsOpenLogin(!isOpenLogin);

  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  console.log(user);
  return (
    <Styles.Container>
      <Styles.Logo>React Shop</Styles.Logo>
      <Styles.Buttons>
        {user ? <div>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Cart</div>
      </Styles.Buttons>
      <Auth isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </Styles.Container>
  );
}

export default Header;
