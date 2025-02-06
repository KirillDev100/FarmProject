import styled from "styled-components";

export const PropertyStyled = styled.p`
  margin: 0;
  color: #000000;
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const PropertyNameStyled = styled.span`
  font-weight: 700;
`;
