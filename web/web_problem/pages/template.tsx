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
import Header from '../components/Header1'

const DATE = new Date(2023, 1, 26)

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

            <Footer></Footer>
        </>
    )


}
