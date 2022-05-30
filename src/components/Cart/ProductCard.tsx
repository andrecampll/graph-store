import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type Props = {
  name: string;
  price: string;
  imageUrl: string;
};

export const ProductCard = ({ name, price, imageUrl }: Props) => (
  <Flex alignItems="center" py="20px">
    <Box mr="5">
      <Heading fontSize="20px">{name}</Heading>
      <Text fontSize="29px" color="gray.700">
        ${price}
      </Text>
    </Box>
    <Image height="86px" src={imageUrl} />
  </Flex>
);
