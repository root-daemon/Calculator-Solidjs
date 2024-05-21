import type { Component } from 'solid-js';

interface ButtonProps {
  action: any;
  value: number | string;
}

const Button = (props: ButtonProps) => {
  return (
    <button class={"p-3 w-full flex items-center justify-center" + (props.value == '=' ? " bg-gray-500 rounded-xl text-white" : "")} onClick={props.action}>
      {props.value}
    </button>
  );
};

export default Button;
