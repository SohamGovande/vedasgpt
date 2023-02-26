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
  Text,
} from "@chakra-ui/react"
import { IoLogoGithub, IoMdSend } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import Typewriter from "typewriter-effect"
import Lottie from "lottie-react"
import rishi from "@/utils/rishi.json"
export default function Home() {
  return (
    <>
      <Head>
        <title>Text an AI rishi. Anywhere, anytime. 🙏🏾</title>
        {/* Add a meta description */}
        <meta name="description" content="Text a rishi. Anywhere, anytime. 🙏🏾" />
        {/* Add theme color for safari */}
        <meta name="theme-color" content="#fff0db" />
        {/* Add OG image of /og.png */}
        <meta property="og:image" content="https://vedasgpt.org/og.png" />
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
          <Heading mt={4} as="h2" fontSize={{ base: "xl", md: "3xl" }} fontWeight="700" textAlign="center">
            <Typewriter
              onInit={(tw) => {
                tw.changeDelay(40)
                tw.typeString("Text me your concerns, my friend.")
                tw.start()
              }}
            />
          </Heading>
          <Flex gap={{ base: 0.5, md: 2 }} direction={{ base: "column", md: "row" }}>
            <chakra.a flex={1} href={`sms:+18559244885?&body=${encodeURIComponent("Should I drink alcohol?")}`}>
              <Button w="100%" mt={4} fontWeight="700" size="lg" colorScheme="red">
                Get Started
              </Button>
            </chakra.a>
            <chakra.a flex={1} href={`whatsapp://send?text=${encodeURIComponent("Text a rishi 🙏🏾: https://vedasgpt.org")}`}>
              <Button
                w="100%"
                mt={4}
                fontWeight="700"
                size="lg"
                colorScheme="blackAlpha"
                rightIcon={<Icon as={FaWhatsapp} />}>
                Share to WhatsApp
              </Button>
            </chakra.a>
          </Flex>
          <Text mt={4} fontSize={{ base: "md", md: "xl" }} textAlign="center">
            <a href="https://github.com/SohamGovande/vedasgpt">
              <Icon as={IoLogoGithub} boxSize="1em" />
            </a>{" "}
            Built by{" "}
            <chakra.a textDecor="underline" href="https://twitter.com/sohamgovande">
              Soham Govande
            </chakra.a>{" "}
            and{" "}
            <chakra.a textDecor="underline" href="https://twitter.com/itsandrewgao">
              Andrew Gao
            </chakra.a>
            .
          </Text>
        </Container>
      </Flex>
    </>
  )
}
