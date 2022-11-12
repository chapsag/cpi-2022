import { Flex, Heading, VStack } from "@chakra-ui/react";
import Navbar from "./NavBar";



export default function Header() {
    return (
      <>
  
        <Flex 
        align="center"
        justify={{ base: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        minH="50vh"
        px={8}
        pb={16}
        backgroundImage="url('festival.jpg')"
        bgSize="cover"
        bgPosition="50% 75%"
        >
          <VStack
          bgColor="rgba(255, 255, 255, 0.8)"
          borderRadius="10"
          p={[5, 5, 5, 5]}
          >
          <Heading
          as="h1"
          size="xl"
          m={[10, 0, 0, 0]}
          fontWeight="bold"
          color="brand2.800"
          textAlign={["center", "center", "left", "left"]}>
            Potato Cloud Fest
          </Heading>
  
          <Heading
          as="h2"
          size="l"
          m={[0, 0, 0, 0]}
          fontWeight="bold"
          color="brand2.800"
          textAlign={["center", "center", "left", "left"]}>
            26-27 Janvier 2023
          </Heading>
          </VStack>
          
        </Flex>
      </>
    )
  
    
  }
  