import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Input, ChakraProvider } from '@chakra-ui/react';
import { getProductSuggestions } from 'api/getProductSuggestions';
import { AnimatedBadge } from '../../styles/index.styles';

const FoodScan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 3) {
      getProductSuggestions(searchTerm).then((res) =>
        setSuggestions(((res.data as unknown) as []).slice(0, 10)),
      );
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <ChakraProvider>
      <Input onChange={(event) => handleSearch(event)} />

      {suggestions.map((suggestion) => (
        <AnimatedBadge variant='solid' colorScheme='green' ml='1'>
          {suggestion}
        </AnimatedBadge>
      ))}
      <Link href='/food/profile'>
        <Box>hello</Box>
      </Link>
    </ChakraProvider>
  );
};

export default FoodScan;
