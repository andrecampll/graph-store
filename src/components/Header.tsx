import { Flex, Image } from '@chakra-ui/react';
import { Cart } from './Cart';

export const Header = () => (
  <Flex
    as="header"
    alignItems="center"
    justifyContent="space-between"
    px={[8, 6, 4]}
    py={5}
    mx={[0, 0, '22px']}
    borderBottom="4px solid"
    borderColor="gray.900"
    position="fixed"
    zIndex="1"
    width="100%"
    background="white.900"
    maxWidth="1246px"
  >
    <Image src="logo.svg" />

    <Cart />
  </Flex>
);
