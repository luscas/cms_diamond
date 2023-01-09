import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
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
  useToast,
} from "@chakra-ui/react";

import { RiAccountCircleFill } from "react-icons/ri";
import { HiLockOpen } from "react-icons/hi";

import axios from "axios";

export default function Index() {
  const router = useRouter();
  const toast = useToast();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      nick: "",
      password: "",
    },
  });

  const onSubmit = async (data: { nick: string; password: string }) => {
    toast({
      title: "Aguarde um momento",
      status: "loading",
      position: "top-right",
    });

    try {
      await axios.post("/api/authenticate", data);

      toast.closeAll();
      toast({
        title: "Login efetuado com sucesso",
        status: "success",
        position: "top-right",
      });

      router.push("/home");
    } catch (error: any) {
      let err = error.response.data;
      console.log(err);

      toast.closeAll();

      toast({
        title: err.error.name == "ZodError" ? "Erro ao fazer login" : "Ops!",
        description:
          err.error.name == "ZodError"
            ? "Verifique se o nick e a senha estão corretos"
            : err.error,
        status: err.error.name == "ZodError" ? "error" : "info",
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Login • Diamond</title>
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input placeholder="nick" size="xl" {...register("nick")} />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement mt={3} ml={3}>
                    <HiLockOpen size={20} color="white" />
                  </InputLeftElement>
                  <Input
                    type="password"
                    placeholder="senha"
                    size="xl"
                    {...register("password")}
                  />
                </InputGroup>
              </SimpleGrid>

              <Checkbox size="lg" my={6} mx={2}>
                Salvar dados
              </Checkbox>

              <Button w="100%" variant="gradient" size="xl" type="submit">
                ENTRAR
              </Button>

              <Link href="/register">
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
                Corporation Oy e não é parte do Habbo Hotel®. Copyright 2022 ©
                DDC Diamond. Todos os direitos reservados.
              </Text>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </>
  );
}
