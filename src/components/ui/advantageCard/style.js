import styled from "styled-components";

export const AdvantageStyled = styled.section`
  background-color: ${(props) =>
    props.$isFarm
      ? props.theme.colorForFarmLight
      : props.theme.colorForShopLight};
  position: relative;
  padding: ${(props) => props.theme.indent};
  width: 540px;
  min-height: 197px;
  box-sizing: border-box;
`;

export const AdvantageTypeStyled = styled.p`
  color: ${(props) => props.theme.colorWhite};
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  background-color: ${(props) =>
    props.$isFarm
      ? props.theme.colorForFarmDark
      : props.theme.colorForShopDark};
  padding: 2px 10px;
  margin: 0;
  margin-left: 96px;
  margin-bottom: 4px;
  display: block;
  width: 178px;
  box-sizing: border-box;
`;

export const AdvantagesTitleStyled = styled.p`
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  margin: 0;
  margin-left: 96px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const AdvantageTextStyled = styled.p`
  margin: 0;
  font-weight: 400;
  text-align: left;
`;

export const AdvantageIconStyled = styled.img`
  position: absolute;
  top: ${(props) => props.theme.indent};
  left: ${(props) => props.theme.indent};
`;
