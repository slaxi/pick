import React from "react";

type TVideoProps = {
  src: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Video = ({ src, children, ...props }: TVideoProps) => {
  return (
    <>
      {children}
      <video
        src={src}
        {...props}
        autoPlay
        loop
        muted
        data-testid="video-component"
      />
    </>
  );
};

export default Video;
