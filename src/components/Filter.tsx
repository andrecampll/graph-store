import * as R from 'ramda';

import { Box, Heading, Checkbox, Stack } from '@chakra-ui/react';
import { Category } from '../graphql/generated/graphql';
import { useProductsFilter } from '../hooks/useProductsFilter';
import { categoryItems, priceRanges } from '../utils/filterItems';

export const Filter = () => {
  const { categories, handleFilter } = useProductsFilter();

  return (
    <Box
      css={{
        'div + div': {
          borderTop: '1px solid #c2c2c2',
          marginTop: '40px',
        },
      }}
      width="100%"
      left="0"
      bottom="0"
    >
      <Box width={['100%', '100%', '78%']}>
        <Heading fontSize={['34px', '22px']} mb={['30px', '10']}>
          Category
        </Heading>

        <Stack spacing={5}>
          {categoryItems.map(categoryItem => (
            <Checkbox
              isChecked={R.includes(categoryItem.title, categories)}
              key={categoryItem.id}
              colorScheme="black.900"
              iconColor="black.900"
              borderColor="black"
              size={['lg', 'md']}
              value={categoryItem.title}
              onChange={({ target: { value } }) =>
                handleFilter(value as Category)
              }
            >
              {categoryItem.title}
            </Checkbox>
          ))}
        </Stack>
      </Box>

      <Box width="100%">
        <Heading fontSize={['34px', '22px']} mb={['30px', '10']} mt="8">
          Price range
        </Heading>

        <Stack spacing={5}>
          {priceRanges.map(range => (
            <Checkbox
              key={range.id}
              colorScheme="black.900"
              iconColor="black.900"
              borderColor="black"
              size={['lg', 'md']}
            >
              {range.title}
            </Checkbox>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
