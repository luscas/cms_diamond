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
    Container,
} from "@chakra-ui/react";

import {HiLockOpen, HiMailOpen} from "react-icons/hi";

import { z } from 'zod';
import {RiAccountCircleFill} from "react-icons/ri";

export default function Register() {
    const router = useRouter();
    const toast = useToast();

    const { register, handleSubmit } = useForm({
        reValidateMode: "onChange",
        defaultValues: {
            nick: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: { nick: string; password: string }) => {
        try {
            const schema = z.object({
                nick: z.string().min(3).max(20),
                email: z.string().email(),
                password: z.string().min(6)
            });

            schema.parse(data);

            toast({
                title: "Aguarde um momento",
                status: "loading",
                position: "top-right",
            });
        } catch (error) {
            console.error(error);
        }

        // try {
        //     await axios.post("/api/authenticate", data);
        //
        //     toast.closeAll();
        //     toast({
        //         title: "Login efetuado com sucesso",
        //         status: "success",
        //         position: "top-right",
        //     });
        //
        //     router.push("/home");
        // } catch (error: any) {
        //     let err = error.response.data;
        //     console.log(err);
        //
        //     toast.closeAll();
        //
        //     toast({
        //         title: err.error.name == "ZodError" ? "Erro ao fazer login" : "Ops!",
        //         description:
        //             err.error.name == "ZodError"
        //                 ? "Verifique se o nick e a senha estão corretos"
        //                 : err.error,
        //         status: err.error.name == "ZodError" ? "error" : "info",
        //         position: "top-right",
        //     });
        // }
    };

    return (
        <>
            <Head>
                <title>Criar conta • Diamond</title>
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
                            <GridItem colSpan={8} rowStart={3} rowEnd={9}>
                                <Text fontSize={40} fontWeight="bold" color="#fff" mb={6}>
                                    Criar nova conta
                                </Text>

                                <SimpleGrid spacing={4}>
                                    <InputGroup>
                                        <InputLeftElement mt={3} ml={3}>
                                            <RiAccountCircleFill size={20} color="white" />
                                        </InputLeftElement>
                                        <Input
                                          placeholder="nick"
                                          size="xl"
                                          {...register("nick")}
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <InputLeftElement mt={3} ml={3}>
                                            <HiMailOpen size={20} color="white" />
                                        </InputLeftElement>
                                        <Input placeholder="e-mail" size="xl" {...register("email")} />
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
                                    Concordo com os Termos de Uso
                                </Checkbox>

                                <Link href="/confirmation">
                                    <Button w="100%" variant="gradient" size="xl" type="submit">
                                        CRIAR CONTA
                                    </Button>
                                </Link>
                            </GridItem>
                        </Grid>
                    </form>
                </Container>
            </Box>
        </>
    );
}
