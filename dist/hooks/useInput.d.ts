type TUseInputReturn = [
    {
        value: string | undefined;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onFocus: () => void;
    },
    () => void
];
declare const useInput: (initialValue?: string) => TUseInputReturn;
export default useInput;
