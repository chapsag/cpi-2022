import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Text,
    HStack,
    VStack,
    Link,
    Input,
    Textarea
} from "@chakra-ui/react";
import Header from '../components/Header2'

export default function Home() {
    return (
        <>
            <Navbar />

            <Header />

            <Flex
            align="center"
            justify={{ base: "center" }}
            direction={{ base: "column", md: "column" }}
            wrap="nowrap"
            minH="30vh"
            px={8}
            bgSize="cover"
            bgColor="brand2.400">
                <Box w="70%">
                
                

                <Heading as="h1" size="xl" color="brand2.800" m={10} textAlign="center">Nous joindre</Heading>
                <VStack maxW={700} textAlign="left" spacing={25}>
                    <HStack width="100%">
                        <Heading fontSize={20} color="brand2.800" minW={60}>Téléphone:</Heading>
                        <Heading fontSize={20}>(514)347-2098</Heading>
                    </HStack >
                    <HStack width="100%">
                        <Heading fontSize={20} color="brand2.800" minW={60}>Adresse postale:</Heading>
                        <Heading fontSize={20}>7171 rue Saint-laurent, H8J 4K1, Montréal, QC, CA</Heading>
                    </HStack>
                    <HStack width="100%">
                        <Heading fontSize={20} color="brand2.800" minW={60}>Adresse courriel:</Heading>
                        <Heading fontSize={20}>questions@potatocloud.ca</Heading>
                    </HStack>
                </VStack>

                <Heading as="h1" size="xl" color="brand2.800" m={10} textAlign="center">Questions</Heading>

                <VStack spacing={4} maxW={700} mx="auto">
                    <HStack w="100%">
                        <Input borderRadius={4} border="2px" borderColor="brand2.800" placeholder="Nom" size="medium" w="100%"></Input>
                    </HStack>
                    <HStack spacing={4} w="100%">
                        <Input w borderRadius={4} border="2px" borderColor="brand2.800" placeholder="Courriel" size="medium" w="100%"></Input>
                        <Input borderRadius={4} border="2px" borderColor="brand2.800" placeholder="Téléphone" size="medium" w="100%"></Input>
                    </HStack>
                    <HStack spacing={4} w="100%">
                    <Textarea minH="20vh" borderRadius={4} border="2px" borderColor="brand2.800" placeholder="Message" size="medium" w="100%"></Textarea>
                    </HStack>
                </VStack>

                <Heading 
        maxW={700} 
        mt={10}
        mb={20}
        py={10}
        bgColor="brand2.800"
        as="h4"
        size="lg"
        textAlign="center"
        mx="auto"
        borderRadius={10}

        ><Link  href="./contact" >Envoyer</Link></Heading>

                </Box>
            </Flex>
            <Footer></Footer>
        </>
    )


}
