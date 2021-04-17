import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { getProducts } from '../api/getProducts';

const App = () => {
  const products = getProducts('chicken sausage');
  console.log(products, 'PRODUCST !!!!!!!!');

  return (
    <>
      <div>hello</div>
      <Link href='/food/scan'>
        <Button>Scan my food</Button>
      </Link>
    </>
  );
};

export default App;
