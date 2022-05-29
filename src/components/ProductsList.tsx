import {
  Box as Wrapper,
  Heading,
  Text,
  Image,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { ProductsGrid } from './ProductsGrid';

export const ProductsList = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Wrapper px="4" my="12">
      <Flex alignItems="center" justifyContent="space-between" mb={['6']}>
        <Heading display="flex" as="h4" fontSize="30px">
          Photography/
          <Text color="gray.800" fontWeight="normal">
            Premium Photos
          </Text>
        </Heading>

        {isLargerThan768 ? (
          <Text color="gray.800">Sort by Price</Text>
        ) : (
          <Image src="filter.svg" />
        )}
      </Flex>
      <ProductsGrid
        products={[
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum',
            price: '$3.89',
          },
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum 2',
            price: '$3.89',
          },
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum 3',
            price: '$3.89',
          },
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum 4',
            price: '$3.89',
          },
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum 5',
            price: '$3.89',
          },
          {
            category: 'People',
            imageUrl:
              'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Lorem Ipsum 6',
            price: '$3.89',
          },
        ]}
      />
    </Wrapper>
  );
};
