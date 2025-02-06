import styled from "styled-components";

export const StyledOrder = styled.section`
  box-sizing: border-box;
  padding: 19px;
  padding-top: 23px;
  width: 353px;
  background-color: #ffffff;
`;

export const StyledOrderTitle = styled.p`
  margin: 0;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const StyledOrderInput = styled.input`
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colorBlackForText};
  padding: 12px 13px;
  padding-top: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    color: #333333;
  }
`;

export const StyledPriceTitle = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  margin-bottom: 8px;
`;

export const StyledPrice = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
  margin-bottom: 32px;
`;
