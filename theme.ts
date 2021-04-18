import { extendTheme } from '@chakra-ui/react';

const config = {
  styles: {
    global: {
      fontFamily: 'Rubik',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const theme = extendTheme({ config });
