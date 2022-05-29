import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: {
      '900': '#000000',
    },
    white: {
      '900': '#FFFFFF',
    },
    gray: {
      '900': '#E4E4E4',
      '800': '#9B9B9B',
      '700': '#656565',
    },
  },
  fonts: {
    heading: 'Archivo',
    body: 'Archivo',
  },
  styles: {
    global: {
      body: {
        bg: 'white.900',
        color: 'black.900',
      },
    },
  },
});
