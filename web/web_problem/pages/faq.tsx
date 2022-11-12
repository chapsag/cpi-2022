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
    Link
} from "@chakra-ui/react";
import Header from '../components/Header2'

const data = {
    categories: [
        {name: "Objets permis/interdits",
        qas: [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
        ]},
        {name: "Accès au site",
        qas: [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
        ]},
        {name: "Vente et livraison des billets",
        qas: [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
        ]},
    ]
}

function getTimeRemaining(endtime: Date){
    const total = -(-endtime) / 1 - Date.now();
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    console.log(endtime.getMilliseconds())
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

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
                <Box maxW="70%">
                
                

                <Heading as="h1" size="xl" color="brand2.800" m={10} textAlign="center">FAQ</Heading>

                <VStack mt={5} w="100%" textAlign="left" align="left" spacing={8}>
                {data.categories.map((cat, i) => (
                    <>
                    <Heading  as="h1" fontSize={20} color="black" >{cat.name}</Heading>
                    <VStack  mt={5} w="100%" textAlign="left" align="left" spacing={5}>
                        {cat.qas.map((item, i) => (
                            <>
                                <VStack textAlign="left" align="left">
                                    <HStack>
                                        <Heading fontSize={35} mr={5} color="brand2.800">Q</Heading>
                                        <Heading fontSize={17} color="brand2.500">{item.question}</Heading>
                                    </HStack>
                                    <HStack mb={5}>
                                        <Heading fontSize={35} mr={5} color="brand2.800">A</Heading>
                                        <Heading fontSize={13}>{item.answer}</Heading>
                                    </HStack>
                                </VStack>
                            </>
                        ))}
                    </VStack>
                    </>
                ))}
                </VStack>

                <Heading 
        w={"40vw"} 
        mt={10}
        mb={20}
        py={10}
        bgColor="brand2.800"
        as="h4"
        size="lg"
        textAlign="center"
        mx="auto"
        borderRadius={10}

        ><Link  href="./contact" >Pas trouvé de réponses ?</Link></Heading>

                </Box>
            </Flex>
            <Footer></Footer>
        </>
    )


}
