import React from "react";

export type TButtonProps = {
  title: string;
  handleClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({ title, handleClick, className, disabled }: TButtonProps) => {
  return (
    <button
      className={`font-bold py-2 px-4 rounded ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
