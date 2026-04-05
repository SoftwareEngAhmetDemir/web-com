import React from "react";
import "./style.scss";

export const RedCard: React.FC<{ text: string }> = ({ text }) => {
  return <div className="customCard">

    <h3 className="text">{text}</h3>
  </div>;
};
