export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "button";
};

export type RoundButtonProps = {
  className?: string;
  onClick?: () => void;
  color?: "blue" | string;
  type?: "submit" | "button";
};

export type LinkProps = {
  className?: string;
  src?: string;
  to: string;
  children?: React.ReactNode;
  color?: "blue" | string;
};
