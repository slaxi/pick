import { TButtonProps } from "../src/components/button/Button";
declare const useButton: ({ title, className, disabled, handleClick, }: TButtonProps) => {
    title: string;
    className: string | undefined;
    disabled: boolean | undefined;
    handleClick: (() => void) | undefined;
};
export default useButton;
