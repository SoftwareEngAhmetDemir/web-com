import React from "react";
import "./style.scss";
interface GridButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const GridButton: React.FC<GridButtonProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <button {...props} className={`gridButton ${className || ""}`}>
      {text}
    </button>
  );
};
