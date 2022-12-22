import Image from "next/image";
import { Container, Avatar, ArrowContainer, Option } from "./styles";
import { IconArrowDown } from "~/components/Icons";

export default function UserMenu() {
  return (
    <Container>
      <Avatar />

      <Option>Desconectar</Option>

      <ArrowContainer>
        <IconArrowDown />
      </ArrowContainer>
    </Container>
  );
}
