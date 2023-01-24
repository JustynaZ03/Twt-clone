import React from "react";
import { ButtonProps } from "../../types/components";
import "./button.scss";

export const Button = ({
  className = "",
  onClick,
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`button${className}`}>
      {children}
    </button>
  );
};
