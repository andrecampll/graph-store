import { Flex as Wrapper, Heading, useMediaQuery } from '@chakra-ui/react';
import { Product } from '../graphql/generated/graphql';
import { About } from './About';
import { Banner } from './Banner';
import { Button } from './Button';

type Props = Pick<Product, 'name' | 'featured' | 'description'> & {
  recommendedProducts: {
    slug: string;
    imageUrl: string;
  }[];
  image?: {
    url: string;
    height?: number;
    size?: number;
    width?: number;
  };
  category: string;
};

export const Highlight = ({
  name,
  image,
  featured,
  description,
  recommendedProducts,
  category,
}: Props) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Wrapper
      borderY="4px solid"
      borderColor="gray.900"
      flexDirection="column"
      py="8"
      mx={['4', '4', '22px']}
    >
      <Wrapper
        w="100%"
        mb="8"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>{name}</Heading>

        {isLargerThan768 && <Button w="257px">add to cart</Button>}
      </Wrapper>

      <Banner imageUrl={image?.url} highlight={featured} />

      {!isLargerThan768 && <Button mb="8">add to cart</Button>}

      <About
        recommendedProducts={recommendedProducts}
        name={name}
        aboutText={description}
        category={isLargerThan768 ? category : ''}
        dimensions={{
          ...image,
        }}
      />
    </Wrapper>
  );
};
