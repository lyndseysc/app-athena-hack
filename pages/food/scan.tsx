import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input, Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import { getProductSuggestions } from 'api/getProductSuggestions';
import { SearchIcon } from '@chakra-ui/icons';

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

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const textSearch = () => (
    <Flex direction='column' p='4' pt='6'>
      <Flex justifyContent='flex-start' alignItems='center' pl='2'>
        <SearchIcon></SearchIcon>
        <Text p='2' fontSize='xl'>
          Search for food
        </Text>
      </Flex>
      <Input
        onChange={(event) => handleSearch(event)}
        label='Search for food'
      />
      <Flex direction='column'>
        {suggestions.map((suggestion) => (
          <Link href={`/food/profile/${suggestion.id}`}>
            <Button justifyContent='flex-start' fontWeight='normal' variant=''>
              <Text isTruncated>{capitalizeFirstLetter(suggestion.name)}</Text>
            </Button>
          </Link>
        ))}
      </Flex>
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
