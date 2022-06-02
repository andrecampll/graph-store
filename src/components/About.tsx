import { Box, Flex as Wrapper, Heading, Text } from '@chakra-ui/react';
import { formatBytes } from '../utils/formatBytes';

type Props = {
  name: string;
  aboutText: string;
  category: string;
  recommendedProducts: {
    slug: string;
    imageUrl: string;
  }[];
  dimensions: {
    height?: number;
    width?: number;
    size?: number;
  };
};

export const About = ({
  name,
  aboutText,
  category,
  dimensions: { height, width, size },
  recommendedProducts,
}: Props) => (
  <Wrapper
    flexDir={['column', 'column', 'row']}
    justifyContent={['flex-start', 'space-between']}
  >
    <Box>
      <Heading size="22px" mb={['6', '6', '3']}>
        About the {name}
      </Heading>

      <Heading size="22px" mb={['6', '6', '3']} color="gray.700">
        {category}
      </Heading>

      <Text mb="6" maxW={['auto', '690px']} color="gray.700">
        {aboutText}
      </Text>
    </Box>

    <Box ml={['0', '0', '50px']}>
      <Heading size="22px" mb="6">
        People also buy
      </Heading>

      <Wrapper
        css={{
          'div + div': {
            marginLeft: '25px',
          },
        }}
      >
        {recommendedProducts?.map(product => (
          <Box
            key={product.slug}
            w="97px"
            height="122"
            background={`url(${product.imageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
        ))}
      </Wrapper>

      <Box mt="8">
        <Heading size="22px" mb="4">
          Details
        </Heading>

        <Text color="gray.700">
          Size: {width} x {height} pixel
        </Text>
        <Text color="gray.700">Size: {formatBytes(size)}</Text>
      </Box>
    </Box>
  </Wrapper>
);
