import {
  Box as Wrapper,
  Heading,
  Text,
  Image,
  Flex,
  useMediaQuery,
  Select,
} from '@chakra-ui/react';
import { useModal } from '../hooks/useModal';

import { Filter } from './Filter';
import { Pagination } from './Pagination';
import { ProductsGrid } from './ProductsGrid';

export const ProductsList = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { toggle } = useModal();

  return (
    <Wrapper px={['4', '4', '2']} my="12" mx={[0, 0, '22px']}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={['6', '6', '12']}
      >
        <Heading display="flex" as="h4" fontSize={['18px', '18px', '30px']}>
          Photography/
          <Text color="gray.800" fontWeight="normal">
            Premium Photos
          </Text>
        </Heading>

        {isLargerThan768 ? (
          <Flex align="center">
            <Image src="sort.svg" />
            <Text color="gray.800" mx="2">
              Sort by
            </Text>
            <Select w="100px" variant="unstyled" placeholder="Price">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        ) : (
          <Image src="filter.svg" cursor="pointer" onClick={toggle} />
        )}
      </Flex>

      <Flex justifyContent={['center', 'center', 'space-between']}>
        {isLargerThan768 ? (
          <Wrapper width="20%">
            <Filter />
          </Wrapper>
        ) : null}

        <Flex flexDir="column" alignItems="center" w={['100%', '100%', '78%']}>
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
          <Wrapper mt="20">
            <Pagination totalCountOfRegisters={10} currentPage={3} />
          </Wrapper>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
