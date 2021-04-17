import React from 'react';
import Link from 'next/link';
import { Input, Box } from '@chakra-ui/react';
import { MobileContainer } from '../index.styles';
import GoogleMapReact from 'google-map-react';

const FoodScan = () => (
  <MobileContainer>
    <Input placeholder='Search stores or ingredients'></Input>
    <Link href='/food/profile'>
      <Box>Sausage</Box>
    </Link>
  </MobileContainer>
);

export default FoodScan;
