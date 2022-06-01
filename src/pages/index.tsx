import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { FilterModal } from '../components/Modal/FilterModal';
import { Header } from '../components/Header';
import { Highlight } from '../components/Highlight';
import { ProductsList } from '../components/ProductsList';
import { useModal } from '../hooks/useModal';
import { useGetProductsQuery } from '../graphql/generated/graphql';

export default function Home() {
  const { isOpen } = useModal();

  const { data } = useGetProductsQuery({
    variables: {
      where: {
        OR: [
          {
            featured: true,
          },
        ],
      },
    },
  });

  const recommendedProducts = useMemo(
    () =>
      data?.products.flatMap(product =>
        product.recommendations.map(recommendation => ({
          slug: recommendation.slug,
          imageUrl: recommendation.image.url,
        })),
      ),
    [data?.products],
  );

  return (
    <Box margin="0 auto" maxW="1290">
      <Header />
      <Highlight
        {...data?.products[0]}
        recommendedProducts={recommendedProducts}
      />

      <ProductsList />

      <FilterModal isOpen={isOpen} />
    </Box>
  );
}
