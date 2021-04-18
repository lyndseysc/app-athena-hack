import {
  Button,
  Heading,
  ChakraProvider,
  Flex,
  Box,
  Text,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../theme';
// @ts-ignore
import { Logo } from '../assets/logo.svg';

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
      <Icon as={Logo} height='auto' width='auto' />
      <Heading color='white' paddingBottom='4rem' fontSize='5xl' align='center'>
        Welcome to Full Circle{' '}
      </Heading>
      <Text color='white' fontSize='xl' align='center' paddingBottom='2rem'>
        Full Circle is empowering users to reduce their environmental impact by
        making informed decisions on the go to calculate their shops sustainably
        🌍
      </Text>
      <Link href='/onboard'>
        <Button
          bgColor='#014D40'
          color='white'
          borderTop='4rem'
          align='center'
          borderRadius='24px'
        >
          Get Started
        </Button>
      </Link>
    </Flex>
  </ChakraProvider>
);

export default Home;
