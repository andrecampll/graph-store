import { Button, Icon } from '@chakra-ui/react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type PaginationItemProps = {
  number?: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
  type?: 'next' | 'previous';
};

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
  type = 'next',
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="lg"
        width="4"
        background="none"
        fontWeight="bold"
        _hover={{}}
        _active={{}}
      >
        {number}
      </Button>
    );
  }

  if (number)
    return (
      <Button
        size="sm"
        fontSize="lg"
        width="4"
        background="none"
        _hover={{}}
        _active={{}}
        onClick={() => onPageChange(number)}
        fontWeight="normal"
        color="gray.700"
      >
        {number}
      </Button>
    );

  return (
    <Button
      size="sm"
      fontSize="lg"
      width="4"
      background="none"
      _hover={{}}
      _active={{}}
      onClick={() => onPageChange(number)}
      fontWeight="normal"
    >
      {type === 'previous' ? (
        <Icon w={8} height={8} as={FiChevronLeft} />
      ) : (
        <Icon w={8} height={8} as={FiChevronRight} />
      )}
    </Button>
  );
}
