import React, { useState } from "react";
import { Button } from "./styles";
import { FaTelegramPlane } from "react-icons/fa";


interface ButtonProps {
  title: string;
  onClick: () => void;
}
const DefaultButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button onClick={props.onClick}>
     
      <FaTelegramPlane />
      {props.title}
      
    </Button>
  );
};

export default DefaultButton;
