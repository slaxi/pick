import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ title, handleClick, className, disabled }) => {
    return (_jsx("button", { className: `font-bold py-2 px-4 rounded ${className}`, onClick: handleClick, disabled: disabled, children: title }));
};
export default Button;
