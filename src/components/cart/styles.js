import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`;
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const CartProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const CartProductTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const CartProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-left: auto;
`;

export const CartProductQuantity = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const CartProductRemove = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: red;
  margin-left: 10px;
  cursor: pointer;
`;
