import { Button, Heading, ChakraProvider, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Welcome to Full Circle 🌽</Heading>
    <Heading>What matters to you?</Heading>
    <Flex>
      <Button bgColor='#2680C2' color='white'>
        Animal Welfare
      </Button>
      <Button bgColor='#2680C2' color='white'>
        Safe Fishing
      </Button>
      <Button bgColor='#2680C2' color='white'>
        Less packaging
      </Button>
    </Flex>
    <Link href='/food/scan'>
      <Button bgColor='#2680C2' color='white'>
        Search for my food
      </Button>
    </Link>
  </ChakraProvider>
);

export default App;
