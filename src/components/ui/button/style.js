import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;
  font-size: ${(props) => `${props.theme.fontSizeDefault}`};
  font-weight: 700;
  line-height: 150%;
  text-align: center;
  color: ${(props) => `${props.theme.colorWhite}`};
  cursor: pointer;
  background-color: ${(props) => `${props.theme.colorForButton}`};
  min-width: ${(props) => `${props.$minWidth}px` || `100%`};
  min-height: 60px;
  border: none;
  cursor: pointer;
  display: block;

  &:active,
  &:hover {
    background-color: ${(props) => `${props.theme.colorForButtonHover}`};
  }

  &:hover {
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }
`;
