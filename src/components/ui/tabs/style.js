import styled from "styled-components";

export const StyledTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const StyledTab = styled.button`
  font-size: ${(props) => props.theme.fontSizeDefaultSmall};
  padding: 8px 12px;
  box-shadow: inset 0 0 0 1 rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  background-color: #f6f6f6;
`;

export const StyledTabActive = styled(StyledTab)`
  background-color: #88aa4d;
  color: #ffffff;
`;
