import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/actions";
//Styles
import * as Styles from "./styles";

const Auth = ({ isOpenLogin, setIsOpenLogin }) => {
  const handleEscapeAreaClick = () => setIsOpenLogin(false);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    dispatch(loginUser({ email, password }));
    setIsOpenLogin(false);
  }

  return (
    <Styles.Container isOpenLogin={isOpenLogin}>
      <Styles.AuthEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.Form onSubmit={(e) => handleSubmit(e)}>
        <Styles.FormTitle>Login</Styles.FormTitle>
        <Styles.FormInput type="text" name="email" placeholder="Email" />
        <Styles.FormInput
          type="password"
          name="password"
          placeholder="Password"
        />
        <Styles.FormButton>Login</Styles.FormButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default Auth;
