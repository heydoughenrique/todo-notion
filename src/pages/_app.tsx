import { AppProps } from 'next/app'
import { theme } from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

import '../theme/external/formik.css';
import '../theme/external/swiperSlider.css';

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
