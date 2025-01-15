import styled from "styled-components";

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 9px;
  background-color: #f9f9f9;
  width: 80%;
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
  flex-direction: row;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const CartProductRemove = styled.button`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
`;

export const AddOrRemoveButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

export const CartSessionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const CartSessionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;
