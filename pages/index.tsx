import { Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { getProducts } from '../api/getProducts';
import { MobileContainer } from './index.styles';

const App = () => {
  const products = getProducts('chicken sausage');

  return (
    <MobileContainer>
      <Heading>Welcome to Fern</Heading>
      <Link href='/food/scan'>
        <Button>Scan my food</Button>
      </Link>
    </MobileContainer>
  );
};

export default App;
