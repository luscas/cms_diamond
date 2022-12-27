import {
  VictorySharedEvents,
  VictoryBar,
  VictoryLabel,
  VictoryPie,
} from "victory";
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

        <div>
          <svg viewBox="0 0 450 206">
            <g transform={"translate(0, -95)"}>
              <VictoryPie
                name="pie"
                width={88 * 3}
                standalone={false}
                innerRadius={100}
                colorScale={["#42C2CA", "#6051D1", "#E0BD62"]}
                style={{
                  labels: { display: "none" },
                }}
                data={[
                  { x: "Pontos de dança", y: 1 },
                  { x: "Pontos de evento", y: 1 },
                  { x: "Pontos de gerência", y: 1 },
                ]}
              />
            </g>
          </svg>

          {/* <ul>
            <li>Pontos de dança</li>
            <li>Pontos de evento</li>
            <li>Pontos de gerência</li>
          </ul> */}
        </div>

        <Info>
          <Avatar />
          <Role>Fundador</Role>
        </Info>
      </Container>
    </Card>
  );
}
