import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: rgb(45, 156, 219);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.h1`
  color: rgb(60,60,60)
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;

    div {
        font-weight: 500;

        &:hover {
            cursor: pointer;
        }

        &:nth-child(1) {
            margin-right: 40px;
        }
    `;
