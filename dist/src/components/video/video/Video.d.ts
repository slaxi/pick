import React from "react";
type TVideoProps = {
    src: string;
    children?: React.ReactNode;
    [key: string]: any;
};
declare const Video: ({ src, children, ...props }: TVideoProps) => import("react/jsx-runtime").JSX.Element;
export default Video;
