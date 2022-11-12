import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    900: '#ff4674',
    800: '#ff4655',
    700: '#ff5546',
    600: '#ff6546',
    500: '#ff7446',
  },
  brand2: {
    900: '#b4acd1',
    800: '#bb6be2',
    700: '#691ce8',
    600: '#201bad',
    500: '#050338',
    400: '#e1deed',
    300: '#f0eff6',
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme = {theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
