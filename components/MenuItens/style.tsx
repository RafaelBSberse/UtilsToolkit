import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    transition: 500ms;

    &:hover {
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
`;

export const ItemText = styled.div`
  font-weight: 400;
  user-select: none;
`;
