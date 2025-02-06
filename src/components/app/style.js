import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body,
html {
  margin: 0;
  min-width: 1280px;
  width: 100%;
}

body {
  height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};  
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
`;
