import styled from "styled-components";

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
