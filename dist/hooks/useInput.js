import { useState } from "react";
const useInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue);
    return [
        {
            value: inputValue,
            onChange: (e) => setInputValue(e.target.value),
            onFocus: () => setInputValue('')
        },
        () => setInputValue('')
    ];
};
export default useInput;
