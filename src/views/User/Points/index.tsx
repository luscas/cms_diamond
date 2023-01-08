import * as Popover from "@radix-ui/react-popover";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { Card, CardTitle } from "~/components/Card/styles";
import { Card, CardHeader } from "@chakra-ui/react";
import {
  Container,
  PointsContainer,
  PointsTotal,
  Avatar,
  Info,
  Role,
} from "./styles";
import { useCallback, useState } from "react";

export default function UserPoints({ points }: { points?: number }) {
  const [option, setOption] = useState<string>("Essa semana");

  return (
    <Card>
      <CardHeader>Meus pontos</CardHeader>

      <Container>
        <PointsContainer>
          <PointsTotal>{points || 0}</PointsTotal>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="DropdownMenuButton">
              {option}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent"
                sideOffset={5}
              >
                <DropdownMenu.Item
                  className="DropdownMenuItem"
                  onClick={useCallback(() => setOption("Essa semana"), [])}
                >
                  Essa semana
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="DropdownMenuItem"
                  onClick={useCallback(() => setOption("Esse mês"), [])}
                >
                  Esse mês
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="DropdownMenuItem"
                  onClick={useCallback(() => setOption("Esse ano"), [])}
                >
                  Esse ano
                </DropdownMenu.Item>

                <DropdownMenu.Arrow className="DropdownMenuArrow" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </PointsContainer>

        <div></div>

        <Info>
          <Avatar />
          <Role>Fundador</Role>
        </Info>
      </Container>
    </Card>
  );
}
