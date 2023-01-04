import Image from "next/image";
import {
  Box,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";

import { RiAccountCircleFill } from "react-icons/ri";
import { HiLockOpen } from "react-icons/hi";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Index() {
  const session = useSession();
  const supabase = useSupabaseClient();

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    );
  }

  return (
    <>
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
        maxW={{
          base: "100vw",
          lg: "640px",
        }}
        h="100vh"
        position="fixed"
        top={0}
        right={0}
        backdropFilter="blur(20px)"
        overflowY="auto"
      >
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
          <GridItem colSpan={2}>
            <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
          </GridItem>

          <GridItem colSpan={8} rowStart={3} rowEnd={9}>
            <Text fontSize={40} fontWeight="bold" color="#fff" mb={6}>
              Fazer login
            </Text>

            <SimpleGrid spacing={4}>
              <InputGroup>
                <InputLeftElement mt={3} ml={3}>
                  <RiAccountCircleFill size={20} color="white" />
                </InputLeftElement>
                <Input placeholder="nick" size="xl" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement mt={3} ml={3}>
                  <HiLockOpen size={20} color="white" />
                </InputLeftElement>
                <Input type="password" placeholder="senha" size="xl" />
              </InputGroup>
            </SimpleGrid>

            <Checkbox size="lg" my={6} mx={2}>
              Salvar dados
            </Checkbox>

            <Link href="/home">
              <Button w="100%" variant="gradient" size="xl">
                ENTRAR
              </Button>
            </Link>

            <Link href="/">
              <Text
                my={6}
                fontWeight="medium"
                color="#5C667A"
                px={2}
                css={{
                  "& span": {
                    color: "#fff",
                  },
                }}
              >
                Ainda não possui uma conta? <span>Cadastre-se</span>
              </Text>
            </Link>
          </GridItem>

          <GridItem rowStart={10} rowEnd={13} colSpan={2}>
            <Text fontSize={12} color="#5C667A">
              Este site não possui vínculos ou não é operado pela Sulake
              Corporation Oy e não é parte do Habbo Hotel®. Copyright 2022 © DDC
              Diamond. Todos os direitos reservados.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
