import { Link } from "react-router-dom";
import { LinkProps } from "../../types/components";
import "./link.scss";

export const LinkCustom = ({
  className = "",
  to,
  children,
  color = "",
  src = "",
}: LinkProps) => {
  return (
    <Link to={to} className={`link`}>
      {" "}
      <img alt="more" src={src} className="link__image-item"></img>
      <span className="link__span-item">{children}</span>
    </Link>
  );
};
