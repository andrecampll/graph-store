import { omit } from 'ramda';
import { Box } from '@chakra-ui/react';
import ReactModal from 'react-modal';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  children: ReactNode;
  footer?: ReactNode;
};

export const Modal = ({ isOpen, children, footer }: Props) => (
  <ReactModal
    isOpen={isOpen}
    overlayElement={(props, element) => (
      <Box
        backgroundColor="rgba(50, 50, 50, 0.8)"
        inset="0px"
        position="fixed"
        zIndex="2"
        {...omit(['style'], props)}
      >
        {element}
        <Box as="footer">{footer}</Box>
      </Box>
    )}
    style={{
      content: {
        left: 0,
        bottom: 0,
        width: '100%',
        padding: '36px',
      },
    }}
  >
    {children}
  </ReactModal>
);
