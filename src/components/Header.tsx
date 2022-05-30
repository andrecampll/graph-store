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
  >
    <Image src="logo.svg" />

    <Cart />
  </Flex>
);
