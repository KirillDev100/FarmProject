import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const ProductCardStyled = styled.li`
  background-color: #ffffff;
  padding: 19px;
  display: flex;
  gap: ${(props) => props.theme.indent};
  width: 727px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const ProductImageStyled = styled.img`
  display: block;
  object-fit: contain;
`;

export const ProductTitleStyled = styled(Title)`
  margin-bottom: 16px;
`;
