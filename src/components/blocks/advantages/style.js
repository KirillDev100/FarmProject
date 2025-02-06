import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import styled from "styled-components";

export const AdvantagesStyled = styled.section`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const AdvantagesListStyled = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.indent};
  list-style-type: none;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin-bottom: 64px;
`;

export const ButtonStyled = styled(Button)`
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const TitleStyled = styled(Title)`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 64px;
`;
