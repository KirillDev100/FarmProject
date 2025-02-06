import styled from "styled-components";
import vector from "/src/assets/Vector.svg";

export const StyledChooseProduct = styled.section`
  width: 353px;
  padding: 24px 20px;
  padding-bottom: 12px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background-color: #ffffff;
  margin-bottom: 18px;
`;

export const StyledChooseTitle = styled.p`
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
`;

export const StyledInputWrapper = styled.label`
  display: flex;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCheckboxElement = styled.div`
  width: 24px;
  height: 24px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: #f6f6f6;
  position: relative;
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked ~ ${StyledCheckboxElement.toString()} {
    background-color: #fc9b27;

    &::after {
      content: "";
      display: block;
      position: absolute;
      background-image: url("${vector}");
      width: 16px;
      height: 11.75px;
      left: 50%;
      transform: translateX(-50%);
      top: 5.12px;
    }
  }
`;
