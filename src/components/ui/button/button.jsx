import React from "react";
import { ButtonStyled } from "./style";
import { Link } from "react-router-dom";

function Button({
  children,
  minWidth,
  className,
  onClick,
  type,
  disabled,
  to,
}) {
  if (!to) {
    return (
      <ButtonStyled
        onClick={onClick}
        className={className}
        $minWidth={minWidth}
        type={type || "button"}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    );
  }
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ButtonStyled
        onClick={onClick}
        className={className}
        $minWidth={minWidth}
        type={type || "button"}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    </Link>
  );
}

export default Button;
