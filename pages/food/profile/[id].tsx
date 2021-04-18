import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Badge,
  Stack,
  ChakraProvider,
  Flex,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components/macro';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { getProducts } from '../../../api/getProducts';
import { getProductProfile } from 'api/getProductProfile';

const FoodCard = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #d3cec4;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: white;
  padding: 10px;
  :hover {
    background: #effcf6;
    color: #0c6b58;
    border: 1px solid #0c6b58;
  }
`;

const FoodBox = ({ property }) => {
  return (
    <FoodCard>
      <Flex flexDirection='row'>
        <Image
          minHeight='100px'
          minWidth='100px'
          maxHeight='100px'
          maxWidth='100px'
          src={property.image}
          objectFit='cover'
          alt={`image of ${property.name}`}
          padding='10px'
          fallbackSrc={
            'https://www.flaticon.com/svg/vstatic/svg/57/57108.svg?token=exp=1618756631~hmac=9216f89f3f9dc61afdf2ad0daaed05c4'
          }
        />
        <Flex
          borderRadius='lg'
          overflow='hidden'
          align='flex-end'
          justifyContent='flex-end'
          flexDirection='column'
        >
          <SimpleGrid columns={2} spacing={4} paddingBottom='2rem'>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              whiteSpace='inherit'
              textOverflow='ellipsis'
            >
              {property.name}
            </Box>
            <Box>
              {property.vegan ||
                (property.veggie && (
                  <Badge
                    borderRadius='full'
                    px='2'
                    bg='#EFFCF6;
'
                  >
                    {(property.vegan && 'vegan') ||
                      (property.veggie && 'veggie')}
                  </Badge>
                ))}
              {property.recyclablePackaging && (
                <Badge
                  borderRadius='full'
                  px='2'
                  bg='#EFFCF6;
'
                >
                  'recyclable'
                </Badge>
              )}
              {property.palmOil && (
                <Badge
                  borderRadius='full'
                  px='2'
                  bg='#EFFCF6;
'
                >
                  'Palm oil free'
                </Badge>
              )}
            </Box>
            <Box
              color='gray.500'
              fontWeight='semibold'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.brands}
            </Box>

            <Box d='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <CheckCircleIcon
                    key={i}
                    color={i < 4 ? '#0C6B58' : 'gray.300'}
                  />
                ))}
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </FoodCard>
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
      getProducts(selectedProduct.keywords[0]).then((productData) =>
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
      <Box padding='12px'>
        <Badge borderRadius='full' px='2' bg='#EFFCF6;' margin='7px;'>
          Selected product:
        </Badge>
        {selectedProduct && <FoodBox property={selectedProduct} />}
        <Flex align='flex-end' flexDirection='column'>
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

        <Badge
          borderRadius='full'
          px='2'
          bg='#EFFCF6;
'
          margin='7px;'
        >
          Similar Products
        </Badge>
        <Flex align='center'>
          <Stack>
            {productData &&
              productData.map((result) => {
                return <FoodBox property={result} />;
              })}
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default FoodProfile;
