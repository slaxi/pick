import React from 'react';
type TTitleProps = {
    children: React.ReactNode;
    className?: string;
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    fontSize: number;
};
declare const Title: ({ children, className, heading, fontSize }: TTitleProps) => import("react/jsx-runtime").JSX.Element;
export default Title;
