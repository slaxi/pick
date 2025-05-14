import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Video = ({ src, children, ...props }) => {
    return (_jsxs(_Fragment, { children: [children, _jsx("video", { src: src, ...props, autoPlay: true, loop: true, muted: true, "data-testid": "video-component" })] }));
};
export default Video;
