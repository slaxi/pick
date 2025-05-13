import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Title from "./components/title/Title";
import Text from "./components/text/Text";
import Input from "./components/input/Input";
import VideoWrapper from "./components/video/video-wrapper/VideoWrapper";
function App() {
    return (_jsxs("div", { className: "h-screen bg-gray-100", children: [_jsxs(Title, { heading: "h1", className: "text-4xl font-bold text-blue-500", fontSize: 48, children: [" ", "Hello, Tailwind CSS!"] }), _jsx(Text, { fontSize: 20, className: "font-serif text-lg text-gray-800 text-center", children: "I'm a serif paragraph." }), _jsx(Input, { props: { className: "grow", inputValue: "tresnja" } }), _jsx("main", { children: _jsx(VideoWrapper, {}) })] }));
}
export default App;
