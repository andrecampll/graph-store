import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ModalProvider } from '../hooks/useModal';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ModalProvider>
  );
}

export default MyApp;
