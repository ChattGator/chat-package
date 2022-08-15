import React from "react";
import "../../index.css";
import "./Button.css";

export interface ButtonProps {
  label: string;
  classes: string;
}

const Button = (props: ButtonProps) => {
  return <button className={`${props.classes ? props.classes : "bg-red-100"}`}>{props.label}</button>;
};

export default Button;