import Head from "next/head"
import {
  Container,
  Flex,
  Icon,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  chakra,
  Box,
} from "@chakra-ui/react"
import { IoMdSend } from "react-icons/io"
import Typewriter from "typewriter-effect"
import Lottie from "lottie-react"
import rishi from "@/utils/rishi.json"
export default function Home() {
  return (
    <>
      <Head>
        <title>Vedas GPT</title>
        {/* Add theme color for safari */}
        <meta name="theme-color" content="#fff0db" />
      </Head>
      <Flex
        background="radial-gradient(circle at 25px 25px, #d9b99b 4%, #fff0db 0%), radial-gradient(circle at 75px 75px, lightgray 2%, white 0%)"
        backgroundSize="30px 30px"
        direction="column"
        align="center"
        justify="center"
        h="100vh">
        <Container maxW="container.sm">
          <Box ml="30%" w="40%">
            <Lottie animationData={rishi} />
          </Box>
          <Heading mt={10} textAlign="center" color="#382218" fontWeight="900" as="h1" fontSize={{ base: "6xl", md: "8xl" }}>
            Vedas
            <chakra.span color="red.700">GPT</chakra.span>
          </Heading>
          <Heading mt={4} as="h2" fontSize={{ base: "xl", md: "3xl" }} fontWeight="400" textAlign="center">
            <Typewriter
              onInit={(tw) => {
                tw.changeDelay(40)
                tw.typeString("Text me your concerns, my friend.")
                tw.start()
              }}
            />
          </Heading>
          <Flex mt={10} align="center" gap={2}>
            <Input
              bg="white"
              placeholder="(512) 806-8826"
              boxShadow="0px 0px 5px #38221844"
              border="1px solid lightgray"
              p={3}
              rounded="md"
              size="lg"
              w="100%"
            />
            <Button fontWeight="400" size="lg" colorScheme="red">
              Get Started
            </Button>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}
