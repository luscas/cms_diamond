import { useContext, useState } from "react";
import Link from "next/link";

// Components
import { WelcomeContainer, Welcome } from "~/components/Main/styles";
import IconAdd from "~/components/Icons/IconAdd";
import { Card, CardTitle } from "~/components/Card/styles";
import IconCrown from "~/components/Icons/IconCrown";

// Views
import UserPoints from "~/views/User/Points";
import Footer from "~/views/Footer";
import Default from "~/layouts/Default";

// Chakra Components
import {
  Text,
  Button,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  GridItem,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tag,
  TagLeftIcon,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";
import { HiRefresh } from "react-icons/hi";

// GraphQL
import { createClient } from "~/graphql/client/client_user";
import { GET_RANKING_POINTS } from "~/graphql/ranking_points";

// Hooks
import { useSession } from '~/hooks/session';

export default function Home(props: any) {
  const { user } = useSession();

  const [userPointsType, setUserPointsType] = useState<string>("Essa semana");

  const getRankColor = (position: number) => {
    switch (position) {
      case 1:
        return "#E0BD62";
      case 2:
        return "#42C2CA";
      default:
        return "#ffffff";
    }
  };

  const getRankFontSize = (position: number) => {
    switch (position) {
      case 1:
        return 20;
      case 2:
        return 18;
      default:
        return 16;
    }
  };

  const getUserPoints = (time: string) => {
    switch (time) {
      case "Esse mês":
        return props.view_ranking_monthly.find(
          (row: any) => row.nick === user?.nick
        )?.pts;
      case "Esse ano":
        return props.view_ranking_all.find(
          (row: any) => row.nick === user?.nick
        )?.pts;
      default:
        return props.view_ranking_weekly.find(
          (row: any) => row.nick === user?.nick
        )?.pts;
    }
  };

  return (
    <>
      <WelcomeContainer>
        <Welcome>Bem-vindo, {user?.nick}!</Welcome>
        <Link href="/points/create">
          <Button size="lg" variant="gradient">
            <IconAdd />
            Pontuar
          </Button>
        </Link>
      </WelcomeContainer>

      <UserPoints
        points={getUserPoints(userPointsType)}
        option={userPointsType}
        setOption={setUserPointsType}
      />

      <section>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <Grid templateColumns="repeat(12, 1fr)" mt={5} gap={5}>
          <GridItem colSpan={7}>
            <Card>
              <Flex justifyContent="space-between">
                <CardTitle>Ranking</CardTitle>
                <HiRefresh size={20} />
              </Flex>

              <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={4}>
                <GridItem colSpan={2}>
                  <Select defaultValue="Semana">
                    <option value="Dia">Dia</option>
                    <option value="Semana">Semana</option>
                    <option value="Mês">Mês</option>
                  </Select>
                </GridItem>

                <GridItem colSpan={3}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FiSearch color="white" />
                    </InputLeftElement>

                    <Input placeholder="Pesquisar..." />
                  </InputGroup>
                </GridItem>
              </Grid>

              <TableContainer mt={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th isNumeric>POS</Th>
                      <Th>NOME</Th>
                      <Th>CARGO</Th>
                      <Th isNumeric>PTS</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {props.view_ranking_weekly.map((row: any) => (
                      <Tr key={row.rnk}>
                        <Td isNumeric>{row.rnk}</Td>
                        <Td display="flex" alignItems="center" gap={3}>
                          {row.nick}
                        </Td>
                        <Td>
                          <Tag colorScheme="whiteAlpha">
                            <TagLeftIcon boxSize="8px" as={BsFillCircleFill} />?
                          </Tag>
                        </Td>
                        <Td isNumeric>{row.pts}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </GridItem>

          <GridItem colSpan={5}>
            <Card>
              <Flex justifyContent="space-between" alignItems="center">
                <CardTitle>Ranking geral</CardTitle>

                <HiRefresh size={20} />
              </Flex>

              <TableContainer mt={4} overflowX="hidden">
                <Table>
                  <Thead>
                    <Tr>
                      <Th isNumeric>POS</Th>
                      <Th>NOME</Th>
                      <Th isNumeric>PTS</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {props.view_ranking_all.map((row: any) => (
                      <Tr key={row.rnk}>
                        <Td isNumeric>{row.rnk}</Td>
                        <Td display="flex" alignItems="center" gap={3}>
                          <Text color={getRankColor(row.rnk)}>{row.nick}</Text>
                          {row.rnk == 1 && <IconCrown />}
                        </Td>
                        <Td isNumeric>
                          <Text
                            fontSize={getRankFontSize(row.rnk)}
                            color={getRankColor(row.rnk)}
                          >
                            {row.pts}
                          </Text>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          </GridItem>
        </Grid>
      </section>

      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const token = ctx.req.cookies["diamond_token"];
  const client = createClient(token);

  const { data: ranking_points } = await client.query({
    query: GET_RANKING_POINTS,
  });

  return {
    props: {
      ...ranking_points,
    },
  };
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Default>{page}</Default>;
};
