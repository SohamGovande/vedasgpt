import { Button, ChakraProvider, extendBaseTheme, extendTheme } from "@chakra-ui/react"
import "@fontsource/inter/400.css"
import "@fontsource/inter/900.css"
import "@fontsource/inter/700.css"
import "@/styles/globals.css"

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
