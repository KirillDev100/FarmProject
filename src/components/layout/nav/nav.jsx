import React, { useContext } from "react";
import Button from "/src/components/ui/button/button";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const AnotherButton = styled(Button)`
  padding: 0;
  background: none;
  color: #333333;

  &:hover {
    background: none;
    box-shadow: none;
  }
  &:active {
    background: none;
  }
`;

function Nav() {
  const url = useLocation().pathname;
  return (
    <nav>
      {url === "/" ? (
        <Button to="/order" minWidth="260">
          Купить
        </Button>
      ) : (
        <AnotherButton to="/">Главная</AnotherButton>
      )}
    </nav>
  );
}

export default Nav;
