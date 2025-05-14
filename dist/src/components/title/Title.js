import { jsx as _jsx } from "react/jsx-runtime";
const Title = ({ children, className, heading, fontSize }) => {
    const HeadingSize = heading;
    return (_jsx(HeadingSize, { className: className, style: { fontSize }, "data-testid": "title-component", children: children }));
};
export default Title;
