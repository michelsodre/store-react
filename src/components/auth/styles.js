import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.isOpenLogin ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpenLogin ? "1" : "0")};
  transition: all 0.3s ease;

  h2 {
    color: black;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #222222;
`;
export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(76, 175, 80);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const AuthEscapeArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
