import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterWrapperStyled = styled.div`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  box-sizing: border-box;
`;

export const FooterCopyrightStyled = styled.span`
  font-weight: 400;
  text-align: left;
  margin: 0;
`;
