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
import { Mouse } from '../assets/mouse.svg';
// @ts-ignore
import { Farmer } from '../assets/farmer.svg';
// @ts-ignore
import { Wheat } from '../assets/wheat.svg';
// @ts-ignore
import { Fish } from '../assets/fish.svg';
// @ts-ignore
import { Recycle } from '../assets/recycle.svg';

const StyledBox = styled(Button)`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 167px;
  border-radius: 12px;
  padding: 16px, 0px, 16px, 0px;
  border: 1px solid #d3cec4;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: white;
  :hover {
    background: #effcf6;
    color: #0c6b58;
    border: 1px solid #0c6b58;
  }
`;

const Onboard = () => (
  <ChakraProvider theme={theme}>
    <Flex
      height='100%'
      minHeight='800px'
      direction='column'
      padding='2rem'
      justify='center'
      align='center'
    >
      <Heading color='#27241D' fontSize='xl' border-top>
        Make your impact
      </Heading>

      <Text color='#27241D' paddingBottom='3rem'>
        Choose the topics you care about most
      </Text>
      <SimpleGrid columns={2} spacing={4} paddingBottom='2rem'>
        <StyledBox>
          <Icon as={Farmer} height='auto' width='auto' />
          <Text color='#27241D' align='center'>
            Support fair trade
          </Text>
        </StyledBox>

        <StyledBox>
          <Icon as={Fish} height='auto' width='auto' />
          <Text color='#27241D' align='center'>
            Protect our ocean
          </Text>
        </StyledBox>
        <StyledBox>
          <Icon as={Recycle} height='auto' width='auto' />
          <Text color='#27241D' align='center' whiteSpace='normal'>
            {' '}
            Lead a zero-waste lifestyle
          </Text>
        </StyledBox>
        <StyledBox>
          <Icon as={Mouse} height='auto' width='auto' />
          <Text color='#27241D'>Stop animal cruelty</Text>
        </StyledBox>
        <StyledBox>
          <Icon as={Wheat} height='auto' width='auto' />
          <Text color='#27241D' align='center' whiteSpace='normal'>
            Support organic agriculture
          </Text>
        </StyledBox>
        <StyledBox>
          <Icon as={Bicycle} height='auto' width='auto' />
          <Text color='#27241D' align='center' whiteSpace='normal'>
            Minimize carbon footprint
          </Text>
        </StyledBox>
      </SimpleGrid>
      <Link href='/food/scan-or-search'>
        <Button
          bgColor='#0C6B58'
          color='white'
          align='center'
          borderRadius='24px'
        >
          Continue
        </Button>
      </Link>
    </Flex>
  </ChakraProvider>
);

export default Onboard;
