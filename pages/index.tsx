import {
  Button,
  Heading,
  ChakraProvider,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../theme';

const Home = () => (
  <ChakraProvider theme={theme}>
    <Flex
      bg='#0C6B58'
      height='100%'
      minHeight='800px'
      direction='column'
      padding='3rem'
      justify='center'
      align='center'
    >
      <Heading color='white' paddingBottom='4rem' fontSize='5xl' align='center'>
        Welcome to Full Circle{' '}
      </Heading>
      <Text color='white' fontSize='xl' align='center' paddingBottom='2rem'>
        Full Circle is an app designed to help you shop in a more thoughtful and
        sustainable way 🌍
      </Text>
      <Link href='/onboard'>
        <Button bgColor='#014D40' color='white' borderTop='4rem' align='center'>
          Get Started
        </Button>
      </Link>
    </Flex>
  </ChakraProvider>
);

export default Home;
