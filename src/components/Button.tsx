import {
  Button as ChakraUIButton,
  ButtonProps as ChakraUIButtonProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
} & ChakraUIButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraUIButton
    w="100%"
    background="black.900"
    color="white.900"
    borderRadius="none"
    textTransform="uppercase"
    _hover={{
      opacity: 0.8,
    }}
    _active={{}}
    {...props}
  >
    {children}
  </ChakraUIButton>
);
