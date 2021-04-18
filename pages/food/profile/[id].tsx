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
import { StarIcon } from '@chakra-ui/icons';
import { getProducts } from '../../../api/getProducts';
import { getProductProfile } from 'api/getProductProfile';

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

export const getFoodBarcodeFromUrl = () => {
  const path = window.location.href.split('?')[0];
  // eslint-disable-next-line no-useless-escape
  const barcodeRegex = /\/profile\/([a-z0-9\-]+)/i;
  const match = path.match(barcodeRegex);
  return match?.length && match.length > 1 ? match[1] : null;
};

const FoodProfile = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>();
  const [productData, setProductData] = useState<any>();
  const [sortType, setSortType] = useState<any>();

  useEffect(() => {
    const barcode = getFoodBarcodeFromUrl();
    barcode &&
      getProductProfile(barcode).then((product) =>
        setSelectedProduct(product.data as any),
      );
  }, []);

  useEffect(() => {
    selectedProduct &&
      getProducts(selectedProduct.name).then((productData) =>
        setProductData(
          productData.data.filter(
            (product) => product.code !== selectedProduct.code,
          ) as any,
        ),
      );
  }, [selectedProduct]);

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
      {selectedProduct && <FoodBox property={selectedProduct} />}
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
