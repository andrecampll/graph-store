import { Box } from '@chakra-ui/react';
import { FilterModal } from '../components/FilterModal';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { ProductsList } from '../components/ProductsList';
import { useModal } from '../hooks/useModal';

export default function Home() {
  const { isOpen } = useModal();

  return (
    <Box margin="0 auto" maxW="1290">
      <Header />
      <Highlight />

      <ProductsList />

      <FilterModal isOpen={isOpen} />
    </Box>
  );
}
