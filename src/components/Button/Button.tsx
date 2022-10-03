import React, { useState }  from 'react'
import './Button.scss'

type ButtonProps = {
  title: string
}; 

const Button = (props: ButtonProps) => {
  return (
    <button className="button">{props.title}</button>
  );
};

export default Button;
