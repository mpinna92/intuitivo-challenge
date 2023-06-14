import Link from "next/link";
import { classes } from "utils";
import { ButtonWrapper } from "./button.styles";

interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  center?: boolean;
  variant?: "view" | "edit" | "delete";
  icon?: JSX.Element;
}

const Button = ({
  link = "",
  text,
  onClick,
  center,
  variant,
  icon,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={classes(variant, { center })} onClick={onClick}>
      <Link href={link}>
        {text}
        {icon}
      </Link>
    </ButtonWrapper>
  );
};

export default Button;
