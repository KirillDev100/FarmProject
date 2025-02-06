import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const AboutStyled = styled.section`
  background-color: ${(props) => props.theme.colorForBackground};
  min-width: ${(props) => props.theme.pageWidth};
  width: 100%;
`;

export const AboutWrapper1Styled = styled.div`
  padding: 0 ${(props) => props.theme.pagePadding};
  padding-top: 37px;
  margin: 0 auto;
  display: flex;
  gap: 17px;
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;

  &::after {
    content: "";
    display: block;
    width: 446px;
    height: 543.39px;
    background: url("https://i.postimg.cc/JnMxyJM4/about-image.png");
  }
`;

export const AboutWrapperStyled = styled.div`
  margin-top: 146px;
`;

export const AboutTextStyled = styled.p`
  width: 538px;
  margin: 0;
`;

export const AboutTitleStyled = styled(Title)`
  margin-bottom: 24px;
  width: 637px;
`;
