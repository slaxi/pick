import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Video from "../video/Video";
import Title from "../../title/Title";
import VideoOverlay from "../video-overlay/VideoOverlay";
import Text from "../../text/Text";
import '../Video.css';
const VideoWrapper = ({ children }) => {
    return (_jsxs(_Fragment, { children: [children, _jsxs(Video, { src: "https://cdn.pixabay.com/video/2025/04/10/271161_tiny.mp4", className: "video_fullscreen", children: [_jsx(VideoOverlay, {}), _jsxs(Title, { heading: "h2", fontSize: 64, className: "video_heading font-sans", children: ["This is the heading", _jsx(Text, { className: "text-white-800 font-sans font-thin", fontSize: 18, children: _jsx("span", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, blanditiis odio!" }) })] })] })] }));
};
export default VideoWrapper;
