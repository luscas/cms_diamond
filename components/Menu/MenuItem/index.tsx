// Styles
import { HTMLAttributes } from "react";
import { Container, Title } from "./styles";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  title: string;
  isActive?: boolean;
}

export default function MenuItem(props: MenuItemProps): JSX.Element {
  const htmlProps: Exclude<MenuItemProps, "title" | "isActive" | "icon"> =
    props;

  return (
    <Container isActive={props.isActive} {...htmlProps}>
      {props.icon}

      <Title>{props.title}</Title>
    </Container>
  );
}
