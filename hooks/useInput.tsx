import { useState } from "react"


type TUseInputReturn = [
  {
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
  },
  () => void
];

const useInput = (initialValue?: string):TUseInputReturn  => {
    const [inputValue, setInputValue] = useState(initialValue)

    return [
        {
            value: inputValue,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
            onFocus: () => setInputValue('')
        },
        () => setInputValue('')
    ]
}

export default useInput;