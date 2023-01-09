import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  InputGroup,
  Container,
  InputRightElement,
} from "@chakra-ui/react";

import { HiDuplicate } from "react-icons/hi";

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Confirmar conta • Diamond</title>
      </Head>

      <Box
        bgImage="url(/images/bg.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100vw"
        h="100vh"
        position="absolute"
        top={0}
        left={0}
      />

      <Box
        bg="rgba(14,16,32,0.95)"
        w="100%"
        h="100vh"
        position="fixed"
        top={0}
        right={0}
        backdropFilter="blur(20px)"
        overflowY="auto"
      >
        <Container maxW="2xl">
            <Grid
              templateColumns="1fr"
              templateRows="repeat(12, 1fr)"
              h={{
                base: "auto",
                lg: "100vh",
              }}
              py={{
                base: 5,
                lg: 10,
              }}
              px={{
                base: 5,
                md: 10,
                lg: 20,
              }}
            >
              <GridItem colSpan={8} rowStart={3} rowEnd={9}>
                <Text fontSize={40} fontWeight="bold" color="#fff" mb={6}>
                  Verifique sua missão
                </Text>

                <Text fontSize="lg" fontWeight="bold" color="#5C667A" mb={4}>exemplo@gmail.com</Text>
                <Text color="#fff" mb={6}>Utilize o código abaixo na sua missão do Habbo e confirme para verificar a autenticidade da sua conta. O código abaixo expira em 24h e você precisará realizar o cadastro novamente.</Text>

                <Text fontSize="sm" fontWeight="bold" color="#5C667A" mb={4}>Seu código:</Text>

                <InputGroup>
                  <InputRightElement mt={3} mr={3}>
                    <HiDuplicate size={20} color="#5C667A" />
                  </InputRightElement>
                  <Input
                    size="xl"
                    value="DIAMOND-123456"
                    fontFamily="Ubuntu Condensed"
                    textAlign="center"
                    disabled
                    fontSize="xl"
                    _disabled={{
                      color: "#fff"
                    }}
                  />
                </InputGroup>

                <Button type="button" mt={6} w="100%" variant="gradient" size="xl">
                  CONFIRMAR MISSÃO
                </Button>
              </GridItem>
            </Grid>
        </Container>
      </Box>
    </>
  );
}
