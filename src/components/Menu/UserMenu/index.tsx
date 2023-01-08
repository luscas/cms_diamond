import { Container, Avatar, ArrowContainer, Option } from "./styles";
import { IconArrowDown } from "~/components/Icons";
import Link from "next/link";

export default function UserMenu() {
  return (
    <Container>
      <Avatar />

      <Link href="/">
        <Option>Desconectar</Option>
      </Link>

      <ArrowContainer>
        <IconArrowDown />
      </ArrowContainer>
    </Container>
  );
}
