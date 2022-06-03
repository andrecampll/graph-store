import { Flex as Wrapper, Heading, useMediaQuery } from '@chakra-ui/react';
import { Product } from '../graphql/generated/graphql';
import { useCart } from '../hooks/useCart';
import { About } from './About';
import { Banner } from './Banner';
import { Button } from './Button';

type Props = Pick<
  Product,
  'id' | 'name' | 'featured' | 'description' | 'price'
> & {
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
  id,
  name,
  image,
  featured,
  description,
  recommendedProducts,
  category,
  price,
}: Props) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const { addProduct } = useCart();

  return (
    <Wrapper
      borderBottom="4px solid"
      borderColor="gray.900"
      flexDirection="column"
      py="8"
      mx={['4', '4', '22px']}
      pt={['100px', '100px', '154px']}
    >
      <Wrapper
        w="100%"
        mb="8"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>{name}</Heading>

        {isLargerThan768 && (
          <Button
            w="257px"
            onClick={() =>
              addProduct({
                id,
                category,
                name,
                image,
                price,
              })
            }
          >
            add to cart
          </Button>
        )}
      </Wrapper>

      <Banner imageUrl={image?.url} highlight={featured} />

      {!isLargerThan768 && (
        <Button
          mb="8"
          onClick={() =>
            addProduct({
              id,
              category,
              name,
              image,
              price,
            })
          }
        >
          add to cart
        </Button>
      )}

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
