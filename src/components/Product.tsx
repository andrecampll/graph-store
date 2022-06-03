import { Box as Wrapper, Image, Text, Heading } from '@chakra-ui/react';
import { Button } from './Button';

export type Props = {
  category: string;
  name: string;
  price?: number;
  image?: {
    url: string;
    height?: number;
    size?: number;
    width?: number;
  };
  highlight?: boolean;
  onAddClick: () => void;
};

export const Product = ({
  category,
  name,
  price,
  image,
  highlight,
  onAddClick,
}: Props) => (
  <Wrapper>
    <Image src={image.url} maxH={['454px', '454px', '380px']} />
    {highlight && (
      <Wrapper width="163px" background="white.900">
        Best Seller
      </Wrapper>
    )}
    <Button onClick={onAddClick}>Add to cart</Button>

    <Wrapper as="footer" mt="5">
      <Text fontWeight="bold" color="gray.700">
        {category}
      </Text>
      <Heading fontSize="34px">{name}</Heading>
      <Text color="gray.700" fontSize="29px">
        ${price}
      </Text>
    </Wrapper>
  </Wrapper>
);
