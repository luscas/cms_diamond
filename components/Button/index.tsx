import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const htmlProps: Exclude<ButtonProps, "children"> = props;

  return <ButtonContainer {...htmlProps}>{props.children}</ButtonContainer>;
}
