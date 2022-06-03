import {
  Box as Wrapper,
  Heading,
  Text,
  Image,
  Flex,
  useMediaQuery,
  Select,
  Icon,
} from '@chakra-ui/react';

import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { ProductOrderByInput } from '../graphql/generated/graphql';

import { useCart } from '../hooks/useCart';
import { useModal } from '../hooks/useModal';
import { useProducts } from '../hooks/useProducts';

import { Filter } from './Filter';
import { Pagination } from './Pagination';
import { ProductsGrid } from './ProductsGrid';

export const ProductsList = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { toggle } = useModal();

  const {
    productsData,
    paginationProps,
    orderBy,
    toggleOrderBy,
    handleChangeOrderType,
  } = useProducts();

  const { addProduct } = useCart();

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
            {(orderBy === ProductOrderByInput.NameAsc ||
              orderBy === ProductOrderByInput.PriceAsc) && (
              <Icon as={FiArrowDown} cursor="pointer" onClick={toggleOrderBy} />
            )}

            {(orderBy === ProductOrderByInput.NameDesc ||
              orderBy === ProductOrderByInput.PriceDesc) && (
              <Icon as={FiArrowUp} cursor="pointer" onClick={toggleOrderBy} />
            )}

            <Text color="gray.800" mx="2">
              Sort by
            </Text>
            <Select
              onChange={e =>
                handleChangeOrderType(e.target.value as ProductOrderByInput)
              }
              w="100px"
              variant="unstyled"
              placeholder="Price"
            >
              <option value={ProductOrderByInput.NameAsc}>
                Alphabetically
              </option>
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
          {productsData?.products.length === 0 ? (
            <Flex w="100%" alignItems="center" justifyContent="center" py="10">
              <Text>No products :(</Text>
            </Flex>
          ) : (
            <ProductsGrid
              products={productsData?.products}
              onAddClick={addProduct}
            />
          )}
          <Wrapper mt="20">
            <Pagination
              totalCountOfRegisters={productsData?.products.length}
              currentPage={paginationProps.current}
            />
          </Wrapper>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
