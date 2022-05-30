import { Flex, Icon, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { Button } from '../Button';

import { ProductCard } from './ProductCard';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Flex>
      <Icon
        w={[8, 8, '54px']}
        h={[8, 8, '54px']}
        as={AiOutlineShoppingCart}
        onClick={() => setIsCartOpen(!isCartOpen)}
        cursor="pointer"
      />
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
        1
      </Flex>

      {isCartOpen && (
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
                onClick={() => setIsCartOpen(!isCartOpen)}
                cursor="pointer"
              />
            </Flex>
            <ProductCard
              name="Samurai King Resting"
              imageUrl="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="10000"
            />

            <ProductCard
              name="Samurai King Resting"
              imageUrl="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="10000"
            />

            <ProductCard
              name="Samurai King Resting"
              imageUrl="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              price="10000"
            />

            <Button kind="secondary">Clear</Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};
