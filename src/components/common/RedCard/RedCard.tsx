import React from "react";
import "./style.scss";

export const RedCard: React.FC<{ text: string,classes?:string }> = ({ text,classes }) => {
  return <div className={`customCard ${classes || ''}`}>

    <h3 className="text">{text}</h3>
  </div>;
};
