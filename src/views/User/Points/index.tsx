import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Card, CardHeader, Flex, Text } from "@chakra-ui/react";
import {
  Container,
  PointsContainer,
  PointsTotal,
  Avatar,
  Info,
  Role,
} from "./styles";
import { useCallback } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

export interface UserPointsProps {
  points: number;
  option: string;
  setOption: (option: string) => void;
}

export default function UserPoints({
  points,
  option,
  setOption,
}: UserPointsProps) {
  const data = [
    { name: "Pontos de dança", value: 400 },
    { name: "Pontos de evento", value: 300 },
    { name: "Pontos de gerência", value: 300 },
  ];

  const COLORS = ["#42C2CA", "#6051D1", "#E0BD62"];

  return (
    <Card>
      <CardHeader pb={6}>Meus pontos</CardHeader>

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
                  onClick={useCallback(
                    () => setOption("Essa semana"),
                    [setOption]
                  )}
                >
                  Essa semana
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="DropdownMenuItem"
                  onClick={useCallback(
                    () => setOption("Esse mês"),
                    [setOption]
                  )}
                >
                  Esse mês
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="DropdownMenuItem"
                  onClick={useCallback(
                    () => setOption("Esse ano"),
                    [setOption]
                  )}
                >
                  Esse ano
                </DropdownMenu.Item>

                <DropdownMenu.Arrow className="DropdownMenuArrow" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </PointsContainer>

        <Flex gap={4} mb={6}>
          <PieChart width={88} height={88}>
            <Pie
              activeIndex={2}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={33}
              outerRadius={42}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <Flex gap={4} flexDir="column">
            {data.map((entry, index) => (
              <Flex key={entry.name} alignItems="center" gap={3}>
                <Box
                  width="24px"
                  height="8px"
                  bg={COLORS[index]}
                  rounded="sm"
                />

                <Text fontSize="sm" color="#5C667A">
                  {entry.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Info>
          <Avatar />
          <Role>Fundador</Role>
        </Info>
      </Container>
    </Card>
  );
}
