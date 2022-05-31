import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ModalProvider } from '../hooks/useModal';
import { useApollo } from '../lib/apollo';
import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ModalProvider>
    </ApolloProvider>
  );
}

export default App;
