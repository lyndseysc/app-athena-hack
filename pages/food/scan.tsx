import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input, Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import { getProductSuggestions } from 'api/getProductSuggestions';
import { AnimatedBadge } from '../../styles/index.styles';

const FoodScan = () => {
  const [searchType, setSearchType] = useState<any>();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const searchOptions = () => (
    <Flex>
      <Text>Search for a food</Text>
      <Button>Scan</Button>
      <Button onClick={() => setSearchType('text')}>Text Search</Button>
    </Flex>
  );

  const textSearch = () => (
    <Flex>
      <Input onChange={(event) => handleSearch(event)} />
      {suggestions.map((suggestion) => (
        <Link href={`/food/profile/${suggestion.id}`}>
          <Button variant='solid' colorScheme='green' ml='1'>
            {suggestion.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );

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
      {searchType === 'text' ? textSearch() : searchOptions()}
    </ChakraProvider>
  );
};

export default FoodScan;
