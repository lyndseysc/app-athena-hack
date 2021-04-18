import React, { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import {
  Input,
  Button,
  ChakraProvider,
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react';
import { getProductSuggestions } from 'api/getProductSuggestions';
import { SearchIcon } from '@chakra-ui/icons';
// @ts-ignore
import { Search } from '../../assets/search.svg';
// @ts-ignore
import { Barcode } from '../../assets/bar-code.svg';

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const FoodScan = () => {
  const [searchType, setSearchType] = useState<any>();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const SearchOptions = () => (
    <Flex
      height='100%'
      minHeight='800px'
      direction='column'
      padding='2rem'
      justify='center'
      align='center'
    >
      <Flex
        direction='row'
        paddingBottom='30px'
        justify='center'
        align='center'
      >
        <Icon
          as={Barcode}
          width='auto'
          marginRight='10px'
          color='#014D40'
          height='auto'
        />
        <Button
          bgColor='#014D40'
          color='white'
          borderTop='4rem'
          align='center'
          borderRadius='24px'
          width='350px'
        >
          Scan Item
        </Button>
      </Flex>

      <Flex direction='row' justify='center' align='center'>
        <Icon as={Search} height='auto' width='auto' marginRight='10px' />
        <Button
          bgColor='#014D40'
          color='white'
          borderTop='4rem'
          align='center'
          borderRadius='24px'
          width='350px'
          onClick={() => setSearchType('text')}
        >
          Text Search
        </Button>
      </Flex>
    </Flex>
  );

  const TextSearch = () => {
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    return (
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
              <Button
                justifyContent='flex-start'
                fontWeight='normal'
                variant=''
              >
                <Text isTruncated>
                  {capitalizeFirstLetter(suggestion.name)}
                </Text>
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    );
  };

  useEffect(() => {
    if (searchTerm.length > 3) {
      getProductSuggestions(searchTerm).then((res) =>
        setSuggestions(((res.data as unknown) as []).slice(0, 10)),
      );
    }
  }, [searchTerm]);

  return (
    <ChakraProvider>
      {searchType === 'text' ? TextSearch() : <SearchOptions />}
    </ChakraProvider>
  );
};

export default FoodScan;
