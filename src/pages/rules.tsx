import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Head from "next/head";

// Views
import Default from "~/layouts/Default";

export default function Rules() {
  return (
    <>
      <Head>
        <title>Regras • Diamond</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading fontSize="32">Regras</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gridAutoRows="1fr" gap={6} mt={8}>
        <GridItem>
          <Card h="100%">
            <CardBody>
              <Heading
                fontFamily="Ubuntu Condensed"
                fontSize="lg"
                fontWeight="normal"
              >
                Regras da dança
              </Heading>

              <List color="#5C667A" mt={5}>
                <ListItem fontSize="sm" p={2} mb={2}>
                  1. Todos os membros deverão utilizar os emblemas de grupo
                  durante a atividade no quarto.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  2. Todas as vendas ou ups de cargo deverão ser postadas no
                  nosso{" "}
                  <Link fontWeight="bold" color="#fff">
                    Canal do Discord
                  </Link>
                  . A taxa de pagamento por venda de cargos é de 20%. Ex.: Se
                  vendeu 3 sócios, deverá repassar 3 x (0,2*10) = 6c.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  3. Os operadores deverão utilizar o sistema/planilha de
                  pagamentos automáticos da dança. Deixar de utilizar é grave e
                  poderá resultar na perda do cargo na dança.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  4. Não serão aceitas, sob nenhuma hipótese, tentativas de
                  golpe ou cúmplices durante as atividades no quarto.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  5. Cumpra com as promessas feitas durante as partidas.
                  Anunciou, terá que cumprir.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  6. Não toleramos mensagens de ódio, preconceito ou
                  intolerância. Os usuários que não respeitarem outros jogadores
                  serão advertidos e, caso persistam as mensagens, punidos com
                  banimento no quarto.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  7. Todos os membros deverão passar pelo curso/aula e estarem
                  em dia com o sistema Diamond.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  8. Usuários inativos por mais de 3 meses perderão seus cargos
                  na dança.
                </ListItem>
                <ListItem fontSize="sm" p={2}>
                  9. Divirta-se!
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Card h="100%">
            <CardBody>
              <Heading
                fontFamily="Ubuntu Condensed"
                fontSize="lg"
                fontWeight="normal"
              >
                Regras do jogo
              </Heading>

              <List color="#5C667A" mt={5}>
                <ListItem fontSize="sm" p={2} mb={2}>
                  1. É proibido pagar para entrar na final ou na semifinal, caso
                  o limite de pagues já tenha sido anunciado.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  2. Usuários com efeitos e visuais que atrapalhem o jogo serão
                  advertidos e poderão ser removidos da partida. Ex.: efeito
                  pato, barril, visual de segurança ou visual invisível.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  3. É permitido trocar de lugar com outro jogador uma vez por
                  jogador a cada partida. Ex.: &quot;preciso sair, coloca Fulano
                  no meu lugar&quot;. Jogadores que entraram no lugar de alguém
                  não poderão ceder o seu lugar.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  4. Jogadores que foram desconectados do Habbo poderão retornar
                  à partida dentro de um prazo de aproximadamente 1 minuto. Ao
                  retornarem, deverão continuar a partida de onde ela parou no
                  momento do retorno.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  5. O ponto da partida é individual e intransferível. Apenas o
                  vencedor da partida poderá pontuar e terá seu nome como a
                  referência para o cálculo do pagamento na planilha.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  6. Intermédios serão iniciados por Fundadores e, na ausência
                  destes, por um membro Coordenador. Se ambos os jogadores
                  concordarem em um inter externo e com ótimas referências, o
                  inter poderá ser realizado desta forma.
                </ListItem>
                <ListItem fontSize="sm" p={2} mb={2}>
                  7. No momento do ATENÇÃO, todos os jogadores deverão estar nos
                  pisos estrela. É permitido &apos;tivelar&apos; após o atenção.
                </ListItem>
                <ListItem fontSize="sm" p={2}>
                  8. A rodada só é finalizada após o anúncio do operador.
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

Rules.getLayout = function getLayout(page: React.ReactElement) {
  return <Default>{page}</Default>;
};
