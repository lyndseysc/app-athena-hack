import {
  Button,
  Heading,
  ChakraProvider,
  Flex,
  Text,
  Box,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import { theme } from '../theme';
// @ts-ignore
import { Bicycle } from '../assets/bicycle.svg';
// @ts-ignore
import { Mouse } from '../assets/mouse-1.svg';

const StyledBox = styled(Box)`
  display: flex;
  height: 130px;
  width: 167px;
  border-radius: 12px;
  padding: 16px, 0px, 16px, 0px;
  border: 1px solid #d3cec4;
  justify-content: center;
  align-items: center;
`;

const Onboard = () => (
  <ChakraProvider theme={theme}>
    <Flex
      height='100%'
      minHeight='800px'
      direction='column'
      padding='3rem'
      justify='center'
      align='center'
    >
      <Heading color='#27241D' fontSize='xl'>
        Make your impact
      </Heading>

      <Text color='#27241D'>Choose the topics you care about most</Text>
      <SimpleGrid columns={2} spacing={10}>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>

        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
        </StyledBox>
      </SimpleGrid>
      <Link href='/food/scan'>
        <Button bgColor='#014D40' color='white' borderTop='4rem' align='center'>
          Get Started
        </Button>
      </Link>
    </Flex>
  </ChakraProvider>
);

export default Onboard;
