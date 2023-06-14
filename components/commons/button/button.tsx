import Link from "next/link";
import { classes } from "utils";
import { ButtonWrapper } from "./button.styles";

interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  center?: boolean;
  icon?: JSX.Element;
}

const Button = ({
  link = "",
  text,
  onClick,
  center,
  icon,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={classes({ center })} onClick={onClick}>
      <Link href={link}>
        {text}
        {icon}
      </Link>
    </ButtonWrapper>
  );
};

export default Button;
