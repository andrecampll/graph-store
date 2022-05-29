import { Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { ProductsList } from '../components/ProductsList';

export default function Home() {
  return (
    <Box margin="0 auto" maxW="1290">
      <Header />
      <Highlight />

      <ProductsList />
    </Box>
  );
}
