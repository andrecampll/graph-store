import {
  Button as ChakraUIButton,
  ButtonProps as ChakraUIButtonProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  kind?: 'primary' | 'secondary';
} & ChakraUIButtonProps;

type StyleProps = {
  primary: ChakraUIButtonProps;
  secondary: ChakraUIButtonProps;
};

export const Button = ({
  children,
  kind = 'primary',
  ...props
}: ButtonProps) => {
  const styles: StyleProps = {
    primary: {
      w: '100%',
      background: 'black.900',
      color: 'white.900',
      borderRadius: 'none',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      letterSpacing: '0.07em',
      _hover: {
        opacity: '0.8',
      },
      _active: {},
    },
    secondary: {
      w: '100%',
      background: 'white.900',
      color: 'black.900',
      borderRadius: 'none',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      letterSpacing: '0.07em',
      _hover: {
        opacity: '0.8',
      },
      _active: {},
      border: '3px solid #000',
    },
  };

  return (
    <ChakraUIButton {...styles[kind]} {...props}>
      {children}
    </ChakraUIButton>
  );
};
