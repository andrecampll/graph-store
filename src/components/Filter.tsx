import { Box, Heading, Checkbox, Stack } from '@chakra-ui/react';

const categories = [
  {
    id: '1',
    title: 'People',
  },
  {
    id: '2',
    title: 'Premium',
  },
  {
    id: '3',
    title: 'Pets',
  },
  {
    id: '4',
    title: 'Food',
  },
  {
    id: '5',
    title: 'Landmarks',
  },
  {
    id: '6',
    title: 'Cities',
  },
  {
    id: '7',
    title: 'Nature',
  },
];

const priceRanges = [
  {
    id: '1',
    title: 'Lower than $20',
  },
  {
    id: '2',
    title: '$20 - $100',
  },
  {
    id: '3',
    title: '$100 - $200',
  },
  {
    id: '4',
    title: 'More than $200',
  },
];

export const Filter = () => (
  <Box
    css={{
      'div + div': {
        borderTop: '1px solid #c2c2c2',
        marginTop: '40px',
      },
    }}
    width="20%"
  >
    <Box width={['100%', '100%', '78%']}>
      <Heading fontSize="22px" mb="44px">
        Category
      </Heading>

      <Stack spacing={5}>
        {categories.map(category => (
          <Checkbox
            key={category.id}
            colorScheme="black.900"
            iconColor="black.900"
            borderColor="black"
          >
            {category.title}
          </Checkbox>
        ))}
      </Stack>
    </Box>

    <Box width="100%">
      <Heading fontSize="22px" mb="10" mt="8">
        Price range
      </Heading>

      <Stack spacing={5}>
        {priceRanges.map(range => (
          <Checkbox
            key={range.id}
            colorScheme="black.900"
            iconColor="black.900"
            borderColor="black"
          >
            {range.title}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  </Box>
);
