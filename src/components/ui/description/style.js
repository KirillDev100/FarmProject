import styled from "styled-components";

export const DescriptionTextStyled = styled.p`
  margin: 0;
  margin-bottom: 14px;
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
`;

export const DescriptionPriceStyled = styled.p`
  margin: 0;
  background-color: #d8ecfe;
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  font-weight: 700;
  padding: 4px 8px;
  width: max-content;
`;
