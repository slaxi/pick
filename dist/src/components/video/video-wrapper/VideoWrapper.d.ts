import React from "react";
import Video from "../video/Video";
import "../../video/Video.css";
type TVideoWrapper = React.ComponentProps<typeof Video> & {
    children?: React.ReactNode;
};
declare const VideoWrapper: React.FC<TVideoWrapper>;
export default VideoWrapper;
