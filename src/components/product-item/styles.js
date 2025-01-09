import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  background-color: rgb(245,245,245)
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(245, 129, 66, 0.2);
  gap: 10px;
  padding: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ProductTitle = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(60,60,60)
    font-size: 1.2rem;
    font-weight: 600;
`;

export const ProductPrice = styled.p`
    color: rgb(60,60,60)
  font-size: 1rem;
  font-weight: 400;
`;

export const AddToCartButton = styled.button`
  padding: 5px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(76, 175, 80);
  color: rgb(60, 60, 60);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: rgba(76, 175, 79, 0.5);
  }
`;
