import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/user/action-types";
//Styles
import * as Styles from "./styles";

const Auth = ({ isOpenLogin, setIsOpenLogin }) => {
  const handleEscapeAreaClick = () => setIsOpenLogin(false);
  const dispatch = useDispatch();
  const handleAuthClick = () => {
    dispatch({ type: UserActionTypes.LOGIN, payload: 40 });
  };
  return (
    <Styles.Container isOpenLogin={isOpenLogin}>
      <Styles.AuthEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.Form onSubmit={(e) => e.preventDefault()}>
        <Styles.FormTitle>Login</Styles.FormTitle>
        <Styles.FormInput placeholder="Email" />
        <Styles.FormInput placeholder="Password" type="password" />
        <Styles.FormButton onClick={handleAuthClick}>Login</Styles.FormButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default Auth;
