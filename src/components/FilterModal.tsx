import { omit } from 'ramda';
import { Box } from '@chakra-ui/react';
import ReactModal from 'react-modal';
import { Filter } from './Filter';

type Props = {
  isOpen: boolean;
};

export const FilterModal = ({ isOpen }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayElement={(props, element) => (
        <Box
          backgroundColor="rgba(50, 50, 50, 0.8)"
          inset="0px"
          position="fixed"
          {...omit(['style'], props)}
        >
          {element}
        </Box>
      )}
    >
      <Filter />
    </ReactModal>
  );
};
