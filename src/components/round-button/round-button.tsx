import React from "react";
import { RoundButtonProps } from "../../types/components";
import "./round-button.scss";
import pen from "../../icons/pen.png";

export const RoundButton = ({
  className = "",
  onClick,
  color = "",
  type = "button",
}: RoundButtonProps) => {
  return (
    <button onClick={onClick} type={type} className="round-button">
      <img src={pen} alt="pen" className="round-button__image"></img>
    </button>
  );
};
