import * as Popover from "@radix-ui/react-popover";
import { Card, CardTitle } from "~/components/Card/styles";
import {
  Container,
  PointsContainer,
  PointsTotal,
  Avatar,
  Info,
  Role,
} from "./styles";
import { PopoverContent } from "~/components/Popover/styles";

export default function UserPoints() {
  return (
    <Card disablePadding={true}>
      <CardTitle>Meus pontos</CardTitle>

      <Container>
        <PointsContainer>
          <PointsTotal>128</PointsTotal>
          <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">
              Essa semana
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
              <Popover.Content asChild>
                <PopoverContent>
                  <ul className="options">
                    <li>Essa semana</li>
                    <li>Esse mês</li>
                    <li>Esse ano</li>
                  </ul>
                  <Popover.Arrow className="PopoverArrow" />
                </PopoverContent>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
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
