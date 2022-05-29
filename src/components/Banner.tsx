import { Box, Flex as Wrapper, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  highlight?: boolean;
};

export const Banner = ({ imageUrl, highlight = false }: Props) => (
  <Wrapper mb="8">
    <Box
      background={`url(${imageUrl}) no-repeat`}
      w="100%"
      h={['239px', '239px', '553px']}
      backgroundSize="cover"
      backgroundPosition="center"
    />
    {highlight && (
      <Box
        position="absolute"
        py="4"
        px="12"
        background="white.900"
        mt={['182px', '182px', '497px']}
      >
        <Text fontWeight="bold">Photo of the day</Text>
      </Box>
    )}
  </Wrapper>
);
