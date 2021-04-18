import fs from 'fs';
import styled from 'styled-components/macro';
import { Badge } from '@chakra-ui/react';

export const MobileContainer = styled.div`
  width: 375px;
  height: 667px;
  // background: #e8e6e1;
  // font-family: Rubik;
  // font-size: 34px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 37px;
  // letter-spacing: -0.01em;
  // text-align: left;
`;

export const AnimatedBadge = styled(Badge)`
  background: green;
  animation: slidein 0.5s linear 0.5s;
  @-webkit-keyframes slidein {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
  @keyframes slidein {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
`;
