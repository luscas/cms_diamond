import { Card, CardTitle } from "~/components/Card/styles";
import {
  Container,
  PointsContainer,
  PointsTotal,
  PointsTime,
  Avatar,
  Info,
  Role,
} from "./styles";

export default function UserPoints() {
  return (
    <Card disablePadding={true}>
      <CardTitle>Meus pontos</CardTitle>

      <Container>
        <PointsContainer>
          <PointsTotal>128</PointsTotal>
          <PointsTime>Essa semana</PointsTime>
        </PointsContainer>

        <ul>
          <li>Pontos de dança</li>
          <li>Pontos de evento</li>
          <li>Pontos de gerência</li>
        </ul>

        <Info>
          <Avatar />
          <Role>Fundador</Role>
        </Info>
      </Container>
    </Card>
  );
}
