//Styles
import * as Styles from "./styles";

const Auth = ({ isOpenLogin, setIsOpenLogin }) => {
  const handleEscapeAreaClick = () => setIsOpenLogin(false);
  return (
    <Styles.Container isOpenLogin={isOpenLogin}>
      <Styles.AuthEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.Form>
        <Styles.FormTitle>Login</Styles.FormTitle>
        <Styles.FormInput placeholder="Email" />
        <Styles.FormInput placeholder="Password" type="password" />
        <Styles.FormButton>Login</Styles.FormButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default Auth;
