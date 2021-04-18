import { Button, Heading, ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';
import { getProducts } from '../api/getProducts';
import { MobileContainer } from './index.styles';

const App = () => (
  <ChakraProvider>
    <Heading>Welcome to Fern</Heading>
    <Heading>What matters to you?</Heading>

    <Button bgColor='#2680C2' color='white'>
      Animal Welfare
    </Button>
    <Button bgColor='#2680C2' color='white'>
      Safe Fishing
    </Button>
    <Button bgColor='#2680C2' color='white'>
      Less packaging
    </Button>
    <Link href='/food/scan'>
      <Button bgColor='#2680C2' color='white'>
        Search for my food
      </Button>
    </Link>
  </ChakraProvider>
);

export default App;
