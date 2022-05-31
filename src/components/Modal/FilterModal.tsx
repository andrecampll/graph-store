import { Box, ButtonGroup, Flex, Heading, Icon } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { Modal } from './Modal';
import { Filter } from '../Filter';
import { useModal } from '../../hooks/useModal';
import { Button } from '../Button';

type Props = {
  isOpen: boolean;
};

export const FilterModal = ({ isOpen }: Props) => {
  const { toggle } = useModal();

  return (
    <Modal
      isOpen={isOpen}
      footer={
        <ButtonGroup
          w="100%"
          position="fixed"
          left="0"
          px="4"
          py="8"
          bottom="0"
          background="white.900"
          borderTop="4px solid"
          borderTopColor="gray.900"
        >
          <Button kind="secondary">Clear</Button>
          <Button>Save</Button>
        </ButtonGroup>
      }
    >
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Heading fontSize="34px">Filter</Heading>

        <Icon cursor="pointer" onClick={toggle} as={FiX} w={18} h={18} />
      </Flex>
      <Box mb={['35%', '15%']}>
        <Filter />
      </Box>
    </Modal>
  );
};
