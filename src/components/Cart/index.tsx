import { Flex, Icon, Box, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { Button } from '../Button';

import { ProductCard } from './ProductCard';

export const Cart = () => {
  const { toggle, isOpen, products, clearCart } = useCart();

  return (
    <Flex>
      <Icon
        w={[8, 8, '54px']}
        h={[8, 8, '54px']}
        as={AiOutlineShoppingCart}
        onClick={toggle}
        cursor="pointer"
      />
      {!!products.length && (
        <Flex
          background="black.900"
          padding="2px"
          color="white.900"
          height={['16px', '16px', '22px']}
          width={['16px', '16px', '22px']}
          fontSize={['12px', '12px', '16px']}
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          position="absolute"
          top={['46px', '46px', '65px']}
          ml={['23px', '23px', '40px']}
          cursor="default"
        >
          {products.length}
        </Flex>
      )}

      {isOpen && (
        <Box position="relative" w="max-content">
          <Flex
            position="absolute"
            background="white.900"
            w="443px"
            zIndex="2"
            border="4px solid #E4E4E4"
            top={['46px', '52px', '75px']}
            right="0"
            px="6"
            py="5"
            __css={{
              'div + div': {
                borderTop: '1px solid #c2c2c2',
              },
            }}
          >
            <Flex justifyContent="flex-end" as="header">
              <Icon
                w="18px"
                h="18px"
                as={FiX}
                onClick={toggle}
                cursor="pointer"
              />
            </Flex>

            {products.length === 0 ? (
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                py="10"
              >
                <Text>No products :(</Text>
              </Flex>
            ) : (
              products.map(product => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.image.url}
                  price={product.price.toString()}
                />
              ))
            )}

            <Button kind="secondary" onClick={clearCart}>
              Clear
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};
