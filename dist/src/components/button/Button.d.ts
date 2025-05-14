export type TButtonProps = {
    title: string;
    handleClick?: () => void;
    className?: string;
    disabled?: boolean;
};
declare const Button: ({ title, handleClick, className, disabled }: TButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
