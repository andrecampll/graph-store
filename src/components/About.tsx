import { Box, Flex as Wrapper, Heading, Text } from '@chakra-ui/react';

type Props = {
  name: string;
  aboutText: string;
  category: string;
};

export const About = ({ name, aboutText, category }: Props) => (
  <Wrapper
    flexDir={['column', 'column', 'row']}
    justifyContent={['flex-start', 'space-between']}
  >
    <Box>
      <Heading size="22px" mb={['6', '6', '3']}>
        About the {name}
      </Heading>

      <Heading size="22px" mb={['6', '6', '3']} color="gray.700">
        {category}
      </Heading>

      <Text mb="6" maxW={['auto', '690px']} color="gray.700">
        {aboutText}
      </Text>
    </Box>

    <Box ml={['0', '0', '50px']}>
      <Heading size="22px" mb="6">
        People also buy
      </Heading>

      <Wrapper
        css={{
          'div + div': {
            marginLeft: '25px',
          },
        }}
      >
        <Box
          w="97px"
          height="122"
          background="url(https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          backgroundSize="cover"
          backgroundPosition="center"
        />

        <Box
          w="97px"
          height="122"
          background="url(https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          backgroundSize="cover"
          backgroundPosition="center"
        />

        <Box
          w="97px"
          height="122"
          background="url(https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Wrapper>

      <Box mt="8">
        <Heading size="22px" mb="4">
          Details
        </Heading>

        <Text color="gray.700">Size: 1020 x 1020 pixel</Text>
        <Text color="gray.700">Size: 15mb</Text>
      </Box>
    </Box>
  </Wrapper>
);
