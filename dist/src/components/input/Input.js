import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useInput from "../../../hooks/useInput";
import Button from "../button/Button";
import useButton from "../../../hooks/useButton";
const Input = ({ props }) => {
    const [inputProps, reset] = useInput(props?.inputValue);
    const buttonProps = useButton({
        title: "Reset",
        className: "bg-blue-500 hover:bg-blue-700 text-white",
        disabled: inputProps.value ? false : true,
        handleClick: reset,
    });
    return (_jsxs("div", { className: `flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600`, children: [_jsx("input", { placeholder: "Enter your query...", className: `${props?.className} min-w-0 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6`, ...inputProps, disabled: props?.disabled, "data-testid": 'input-component' }), _jsx(Button, { ...buttonProps })] }));
};
export default Input;
