import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Input, Badge, ChakraProvider } from '@chakra-ui/react';
import { getProductSuggestions } from 'api/getProductSuggestions';

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
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <ChakraProvider>
      <Input onChange={(event) => handleSearch(event)} />

      {suggestions.map((suggestion) => (
        <Badge variant='solid' colorScheme='green' ml='1'>
          {suggestion}
        </Badge>
      ))}
      <Link href='/food/profile'>
        <div></div>
      </Link>
    </ChakraProvider>
  );
};

export default FoodScan;
