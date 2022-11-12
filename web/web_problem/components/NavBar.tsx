
import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import Logo from '../public/logo-placeholder-image.png';
import React from "react";
import { Link } from '@chakra-ui/react'


const CTA = "Get Started"

const data = [
    {
        label: "Billeterie",
        path: "/billeterie"
    },
    {
        label: "Programmation",
        path: "/programmation"
    },
    {
        label: "Infos pratiques",
        path: "/"
    },
    {
        label: "FAQ",
        path: "/faq"
    },
    {
        label: "Nous joindre",
        path: "/contact"
    },
]

export default function Navbar() {
    return (
        <chakra.header>
            <Flex
                zIndex="100"
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
                id="header" bg="brand2.500" position="fixed"
            >
        
            
            <Link color="brand2.900" href="/">
                <Image src={Logo.src} h="50px" />
            </Link>
            
            
            <HStack as="nav" spacing="5">
                {data.map((item, i) => (
                    <Link color="brand2.900" href={item.path}>
                        <Button variant="nav"> {item.label} </Button>
                    </Link>
                ))}
            </HStack>

            
            
            </Flex>
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            ></Flex>
        </chakra.header>
    );
}