import { TButtonProps } from "../src/components/button/Button";

const useButton = ({
  title,
  className,
  disabled,
  handleClick,
}: TButtonProps) => ({
  title,
  className,
  disabled,
  handleClick,
});

export default useButton;
