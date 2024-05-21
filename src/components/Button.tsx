import type { Component } from 'solid-js';

interface ButtonProps {
  action: any;
  value: number | string;
}

const Button = (props: ButtonProps) => {
  return (
    <button class="p-2 w-10 bg-gray-200" onClick={props.action}>
      {props.value}
    </button>
  );
};

export default Button;
