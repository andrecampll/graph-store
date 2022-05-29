import { Box as Wrapper, Image, Text, Heading } from '@chakra-ui/react';
import { Button } from './Button';

export type Props = {
  category: string;
  name: string;
  price: string;
  imageUrl: string;
  highlight?: boolean;
};

export const Product = ({
  category,
  name,
  price,
  imageUrl,
  highlight,
}: Props) => (
  <Wrapper>
    <Image src={imageUrl} height={['462px', '462px', '398px']} />
    {highlight && (
      <Wrapper width="163px" background="white.900">
        Best Seller
      </Wrapper>
    )}
    <Button>Add to cart</Button>

    <Wrapper as="footer" mt="5">
      <Text fontWeight="bold" color="gray.700">
        {category}
      </Text>
      <Heading fontSize="34px">{name}</Heading>
      <Text color="gray.700" fontSize="29px">
        {price}
      </Text>
    </Wrapper>
  </Wrapper>
);
