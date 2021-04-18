import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  Stack,
  ChakraProvider,
  Flex,
  Select,
} from '@chakra-ui/react';
import { StarIcon, EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { getProducts } from '../../api/getProducts';

const results = [
  {
    name: 'Pork and Leek Sausages',
    keywords: [
      'leek',
      'finest',
      'tesco',
      'gluten-free',
      'pork-sausage',
      'and',
      'sausage',
      'pork',
    ],
    allergenTags: [],
    brands: 'Tesco Finest, Tesco',
    code: '5053947859014',
    ingredientOrigin: {
      aggregated_origins: [
        {
          origin: 'en:unknown',
          percent: 100,
        },
      ],
      epi_score: 0,
      epi_value: -5,
      origins_from_origins_field: ['en:unknown'],
      transportation_score_be: 0,
      transportation_score_ch: 0,
      transportation_score_de: 0,
      transportation_score_es: 0,
      transportation_score_fr: 0,
      transportation_score_ie: 0,
      transportation_score_it: 0,
      transportation_score_lu: 0,
      transportation_score_nl: 0,
      transportation_value_be: 0,
      transportation_value_ch: 0,
      transportation_value_de: 0,
      transportation_value_es: 0,
      transportation_value_fr: 0,
      transportation_value_ie: 0,
      transportation_value_it: 0,
      transportation_value_lu: 0,
      transportation_value_nl: 0,
      value_be: -5,
      value_ch: -5,
      value_de: -5,
      value_es: -5,
      value_fr: -5,
      value_ie: -5,
      value_it: -5,
      value_lu: -5,
      value_nl: -5,
      warning: 'origins_are_100_percent_unknown',
    },
    recyclablePackaging: false,
    threatenedSpecies: {},
    ecoscore: 'e',
    stores: null,
    palmOil: 'unknown',
    vegan: false,
    vegetarian: false,
    image:
      'https://static.openfoodfacts.org/images/products/505/394/785/9014/front_en.13.200.jpg',
  },
  {
    name: '6 Lincolnshire Sausages',
    keywords: ['lincolnshire', 'tesco', 'finest', 'sausage', 'no-gluten'],
    allergenTags: [],
    brands: 'Tesco finest',
    code: '5053947861260',
    ingredientOrigin: {
      aggregated_origins: [
        {
          origin: 'en:unknown',
          percent: 100,
        },
      ],
      epi_score: 0,
      epi_value: -5,
      origins_from_origins_field: ['en:unknown'],
      transportation_score_be: 0,
      transportation_score_ch: 0,
      transportation_score_de: 0,
      transportation_score_es: 0,
      transportation_score_fr: 0,
      transportation_score_ie: 0,
      transportation_score_it: 0,
      transportation_score_lu: 0,
      transportation_score_nl: 0,
      transportation_value_be: 0,
      transportation_value_ch: 0,
      transportation_value_de: 0,
      transportation_value_es: 0,
      transportation_value_fr: 0,
      transportation_value_ie: 0,
      transportation_value_it: 0,
      transportation_value_lu: 0,
      transportation_value_nl: 0,
      value_be: -5,
      value_ch: -5,
      value_de: -5,
      value_es: -5,
      value_fr: -5,
      value_ie: -5,
      value_it: -5,
      value_lu: -5,
      value_nl: -5,
      warning: 'origins_are_100_percent_unknown',
    },
    recyclablePackaging: true,
    threatenedSpecies: {},
    ecoscore: 'unknown',
    stores: null,
    palmOil: 'unknown',
    vegan: false,
    vegetarian: false,
    image:
      'https://static.openfoodfacts.org/images/products/505/394/786/1260/front_en.6.200.jpg',
  },
  {
    name: 'Skinny sausage',
    keywords: [
      'sausage',
      'good',
      'the',
      'company',
      'little',
      'meat',
      'prepared',
      'skinny',
    ],
    allergenTags: ['en:sulphur-dioxide-and-sulphites'],
    brands: 'The Good Little Company',
    code: '5060055251104',
    ingredientOrigin: {
      aggregated_origins: [
        {
          origin: 'en:unknown',
          percent: 100,
        },
      ],
      epi_score: 0,
      epi_value: -5,
      origins_from_origins_field: ['en:unknown'],
      transportation_score_be: 0,
      transportation_score_ch: 0,
      transportation_score_de: 0,
      transportation_score_es: 0,
      transportation_score_fr: 0,
      transportation_score_ie: 0,
      transportation_score_it: 0,
      transportation_score_lu: 0,
      transportation_score_nl: 0,
      transportation_value_be: 0,
      transportation_value_ch: 0,
      transportation_value_de: 0,
      transportation_value_es: 0,
      transportation_value_fr: 0,
      transportation_value_ie: 0,
      transportation_value_it: 0,
      transportation_value_lu: 0,
      transportation_value_nl: 0,
      value_be: -5,
      value_ch: -5,
      value_de: -5,
      value_es: -5,
      value_fr: -5,
      value_ie: -5,
      value_it: -5,
      value_lu: -5,
      value_nl: -5,
      warning: 'origins_are_100_percent_unknown',
    },
    recyclablePackaging: false,
    threatenedSpecies: {},
    ecoscore: 'unknown',
    stores: [],
    palmOil: 'unknown',
    vegan: false,
    vegetarian: false,
    image:
      'https://static.openfoodfacts.org/images/products/506/005/525/1104/front_en.12.200.jpg',
  },
  {
    name: 'Skinny pork sausages',
    keywords: ['meat', 'sausage', 'asda', 'skinny', 'prepared', 'pork'],
    allergenTags: [],
    brands: 'asda',
    code: '4088600091716',
    ingredientOrigin: {
      aggregated_origins: [
        {
          origin: 'en:unknown',
          percent: 100,
        },
      ],
      epi_score: 0,
      epi_value: -5,
      origins_from_origins_field: ['en:unknown'],
      transportation_score_be: 0,
      transportation_score_ch: 0,
      transportation_score_de: 0,
      transportation_score_es: 0,
      transportation_score_fr: 0,
      transportation_score_ie: 0,
      transportation_score_it: 0,
      transportation_score_lu: 0,
      transportation_score_nl: 0,
      transportation_value_be: 0,
      transportation_value_ch: 0,
      transportation_value_de: 0,
      transportation_value_es: 0,
      transportation_value_fr: 0,
      transportation_value_ie: 0,
      transportation_value_it: 0,
      transportation_value_lu: 0,
      transportation_value_nl: 0,
      value_be: -5,
      value_ch: -5,
      value_de: -5,
      value_es: -5,
      value_fr: -5,
      value_ie: -5,
      value_it: -5,
      value_lu: -5,
      value_nl: -5,
      warning: 'origins_are_100_percent_unknown',
    },
    recyclablePackaging: false,
    threatenedSpecies: {},
    ecoscore: 'unknown',
    stores: null,
    palmOil: 'unknown',
    vegan: false,
    vegetarian: false,
    image:
      'https://static.openfoodfacts.org/images/products/408/860/009/1716/front_en.3.200.jpg',
  },
  {
    name: 'Polish Sausage',
    keywords: ['sokolow', 'polish', 'sausage'],
    allergenTags: [],
    brands: 'Sokolow',
    code: '5380603003628',
    ingredientOrigin: {
      aggregated_origins: [
        {
          origin: 'en:unknown',
          percent: 100,
        },
      ],
      epi_score: 0,
      epi_value: -5,
      origins_from_origins_field: ['en:unknown'],
      transportation_score_be: 0,
      transportation_score_ch: 0,
      transportation_score_de: 0,
      transportation_score_es: 0,
      transportation_score_fr: 0,
      transportation_score_ie: 0,
      transportation_score_it: 0,
      transportation_score_lu: 0,
      transportation_score_nl: 0,
      transportation_value_be: 0,
      transportation_value_ch: 0,
      transportation_value_de: 0,
      transportation_value_es: 0,
      transportation_value_fr: 0,
      transportation_value_ie: 0,
      transportation_value_it: 0,
      transportation_value_lu: 0,
      transportation_value_nl: 0,
      value_be: -5,
      value_ch: -5,
      value_de: -5,
      value_es: -5,
      value_fr: -5,
      value_ie: -5,
      value_it: -5,
      value_lu: -5,
      value_nl: -5,
      warning: 'origins_are_100_percent_unknown',
    },
    recyclablePackaging: true,
    threatenedSpecies: {
      warning: 'ingredients_missing',
    },
    ecoscore: 'unknown',
    stores: null,
    palmOil: false,
    vegan: false,
    vegetarian: false,
    image: null,
  },
];

const FoodBox = ({ property }) => {
  return (
    <Flex
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      align='flex-end'
      justifyContent='flex-end'
    >
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {(property.vegan && 'vegan') || (property.veggie && 'veggie')}
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {property.recyclablePackaging && 'recyclable'}
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {property.palmOil && 'Palm oil free'}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.brands}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.name}
        </Box>

        <Box d='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < 4 ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {4} reviews
          </Box>
        </Box>
      </Box>
      <Box p='4'>
        <Image
          align='center center'
          boxSize='125px'
          src={property.image}
          alt={`image of ${property.name}`}
          objectFit='cover'
        />
      </Box>
    </Flex>
  );
};

const FoodProfile = () => {
  const [productData, setProductData] = useState<any>();
  const [sortType, setSortType] = useState('albums');

  useEffect(() => {
    getProducts('chocolate spread').then((productData) =>
      setProductData(productData.data as any),
    );
  }, []);

  useEffect(() => {
    const sortArray = (type) => {
      if (!productData) {
        return;
      }

      const types = {
        recyclable: 'recyclablePackaging',
        vegan: 'vegan',
        vegetarian: 'vegetarian',
        palmOil: 'palmOil',
      };
      const sortProperty = types[type];
      const sorted = [...productData].sort(
        (a, b) => b[sortProperty] - a[sortProperty],
      );
      setProductData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <ChakraProvider>
      <Flex align='flex-end' flexDirection='column' padding='10px'>
        <Select
          placeholder='Sort by'
          maxWidth='125px'
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value='recyclable'>Recyclable Packaging</option>
          <option value='vegan'>Vegan</option>
          <option value='vegetarian'>Vegetarian</option>

          <option value='palmOil'>No Palm Oil</option>
        </Select>
      </Flex>
      <Flex align='center'>
        <Stack>
          {productData &&
            productData.map((result) => {
              console.log(result, 'RSULT');
              return <FoodBox property={result} />;
            })}
        </Stack>
      </Flex>
    </ChakraProvider>
  );
};

export default FoodProfile;
