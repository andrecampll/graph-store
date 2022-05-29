import { Flex, Icon, Image } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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

    <Icon w={8} height={8} as={AiOutlineShoppingCart} />
  </Flex>
);
