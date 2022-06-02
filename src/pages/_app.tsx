import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ModalProvider } from '../hooks/useModal';
import { ProductsFilterProvider } from '../hooks/useProductsFilter';
import { useApollo } from '../lib/apollo';
import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ProductsFilterProvider>
        <ModalProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ModalProvider>
      </ProductsFilterProvider>
    </ApolloProvider>
  );
}

export default App;
