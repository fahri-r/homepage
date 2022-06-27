import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import config from '../../config'
import Footer from '../footer'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fahri's homepage" />
        <meta name="author" content={config.name} />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content={config.name} />
        <meta name="og:title" content={config.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.jpg" />
        <title>{config.name} - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
