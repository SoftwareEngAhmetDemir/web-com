import React from "react";
import "./style.scss";

export const RedCard: React.FC<{ text: React.ReactNode; classes?: string; style?: React.CSSProperties }> = ({ text, classes, style }) => {
  return <div className={`customCard ${classes || ''}`} style={style}>
    <h3 className="text">{text}</h3>
  </div>;
};
