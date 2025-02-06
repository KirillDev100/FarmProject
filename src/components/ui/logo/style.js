import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSpan = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 32.2px;
  text-align: left;
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 24px;
  text-decoration: none;
  color: #333333;
  align-items: center;
`;
