import React from "react";
type TText = {
    children: React.ReactNode;
    fontSize: number;
    className: string;
};
declare const Text: ({ children, fontSize, className }: TText) => import("react/jsx-runtime").JSX.Element;
export default Text;
