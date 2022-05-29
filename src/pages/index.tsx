import { Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';

export default function Home() {
  return (
    <Box margin="0 auto" maxW="1290">
      <Header />
      <Highlight />
    </Box>
  );
}
