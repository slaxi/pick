import React from "react";

type TText = {
  children: React.ReactNode;
  fontSize: number;
  className: string;
};

const Text = ({ children, fontSize, className }: TText) => {
  return (
    <p
      className={`font-sans ${className}`}
      style={{ fontSize }}
      data-testid="text-component"
    >
      {children}
    </p>
  );
};

export default Text;
