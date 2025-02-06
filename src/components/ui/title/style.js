import styled from "styled-components";

export const TitleStyled = styled.h1`
  line-height: 115%;
  font-weight: Bold;
  margin: 0;
  font-size: ${(props) => {
    switch (props.$level) {
      case "1":
        return 44;
      case "2":
        return 36;
      case "3":
        return 32;
      case "4":
        return 24;
    }
  }}px;
`;
