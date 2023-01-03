// Styles
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Container, Title } from "./styles";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  title: string;
  link: string;
  isActive?: boolean;
}

export default function MenuItem(props: MenuItemProps): JSX.Element {
  const htmlProps: Exclude<MenuItemProps, "title" | "isActive" | "icon"> =
    props;

  return (
    <Link href={props.link} passHref>
      <Container isActive={props.isActive} {...htmlProps}>
        {props.icon}

        <Title>{props.title}</Title>
      </Container>
    </Link>
  );
}
