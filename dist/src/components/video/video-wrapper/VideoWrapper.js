import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Video from "../video/Video";
import Title from "../../title/Title";
import VideoOverlay from "../video-overlay/VideoOverlay";
import Text from "../../text/Text";
import "../../video/Video.css";
const VideoWrapper = ({ children, ...props }) => {
    return (_jsxs(_Fragment, { children: [children, _jsxs(Video, { ...props, children: [_jsx(VideoOverlay, {}), _jsxs(Title, { heading: "h2", fontSize: 64, className: "video_heading font-sans", children: ["This is the heading", _jsx(Text, { className: "text-white-800 font-sans font-thin", fontSize: 18, children: _jsx("span", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, blanditiis odio!" }) })] })] })] }));
};
export default VideoWrapper;
