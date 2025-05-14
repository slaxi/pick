import { jsx as _jsx } from "react/jsx-runtime";
const Text = ({ children, fontSize, className }) => {
    return (_jsx("p", { className: `font-sans ${className}`, style: { fontSize }, "data-testid": "text-component", children: children }));
};
export default Text;
