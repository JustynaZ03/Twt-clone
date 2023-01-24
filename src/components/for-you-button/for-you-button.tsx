import React from "react";
import { ButtonProps } from "../../types/components";
import "./for-you-button.scss";

export const ForYouButton = ({
  className = "",
  onClick,
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`home-button${className}`}>
      {children}
    </button>
  );
};
