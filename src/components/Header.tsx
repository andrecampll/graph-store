import { Flex, Icon, Image } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Header() {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      px={[8, 16, 24]}
      py={5}
      borderBottom="4px solid"
      borderBottomColor="gray.900"
    >
      <Image src="logo.svg" />

      <Icon w={8} height={8} as={AiOutlineShoppingCart} />
    </Flex>
  );
}
