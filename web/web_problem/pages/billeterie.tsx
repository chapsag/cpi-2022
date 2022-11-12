import Navbar from "../components/NavBar"
import data from "../tickets.json"
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

const DATA = JSON.parse(JSON.stringify(data))

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

                <Heading as="h1" size="xl" color="brand2.800" mt={10}>Billeterie</Heading>

                <VStack mt={10}>
                {data.packages.map((item, i) => (
                    <>
                    <HStack p={5} w="100%">
                        <VStack>
                            <Heading size="xl">{item.display_name}</Heading>
                            <Heading size="l">{item.description_fr}</Heading>
                        </VStack>
                        <VStack minW="20%">
                            <Heading fontSize={25} as="h1">{item.price}.00 $</Heading>
                        </VStack>                        
                        <VStack minW="20%">
                        <Heading 
                        w={"90%"} 
                        py={5}
                        bgColor="brand2.800"
                        as="h4"
                        size="l"
                        textAlign="center"
                        borderRadius={10}

                        ><Link  href="./billeterie" >Acheter</Link></Heading>
                        </VStack>
                    </HStack>
                {i + 1 < data.packages.length ? <Box minH="2px" minW="92%" borderRadius={1} bgColor="brand2.800"></Box> : <></>}
                    </>
                ))}
                </VStack>

                <Heading as="h1" size="xl" color="brand2.800" m={10}>Panier</Heading>

                <VStack w="70%" mb={20}>
                    <HStack w="100%">
                        <Heading w={40} size="md" textAlign="left" mr={5}>The Yam</Heading>
                        <Heading size="sm" textAlign="left" mr={5}>Avec ce paquet, obtenez accès à tous les événements du festival qui débutent après 17h.</Heading>
                        <Heading w={40} size="md" textAlign="right">1</Heading>
                    </HStack>
                    <HStack w="100%">
                        <Heading w={40} size="md" textAlign="left" mr={5}>The Petite Patate</Heading>
                        <Heading size="sm" textAlign="left" mr={5}>Le billet idéal pour les familles. Donne accès aux spectacles avant 21h et à tous les ateliers.</Heading>
                        <Heading w={40} size="md" textAlign="right">2</Heading>
                    </HStack>
                </VStack>


            </Flex>
            <Footer></Footer>
        </>
    )


}
