import { Flex as Wrapper, Heading, useMediaQuery } from '@chakra-ui/react';
import { About } from './About';
import { Banner } from './Banner';
import { Button } from './Button';

export const Highlight = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Wrapper
      borderY="4px solid"
      borderColor="gray.900"
      flexDirection="column"
      py="8"
      px="4"
    >
      <Wrapper
        w="100%"
        mb="8"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>Samurai King Resting</Heading>

        {isLargerThan768 && <Button w="257px">add to cart</Button>}
      </Wrapper>

      <Banner
        imageUrl="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        highlight
      />

      {!isLargerThan768 && <Button mb="8">add to cart</Button>}

      <About
        name="Samurai King Resting"
        aboutText="So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Ciceros De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."
        category={isLargerThan768 ? 'Pets' : ''}
      />
    </Wrapper>
  );
};
