/* eslint-disable no-void */
import { useEffect, useMemo, useState } from 'react';

import { Category } from '../graphql/generated/graphql';
import { PriceRange } from './useProductsFilter';

const isFiltering = (filters: Params['appliedFilters']) =>
  !!filters.categories || !!filters.categories;

type PaginationProps = {
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
};

type Params = {
  appliedFilters: {
    categories: Category[];
    priceRanges: PriceRange[];
  };
};

export const useProductsPagination = ({ appliedFilters }: Params) => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);

  const options = useMemo(
    () => ({
      first: pageSize,
      skip: pageSize * (page - 1),
    }),
    [page, pageSize],
  );

  useEffect(
    () => void (isFiltering(appliedFilters) && setPage(1)),
    [appliedFilters],
  );

  const paginationProps = useMemo<PaginationProps>(
    () => ({
      pageSize,
      current: page,
      onChange: _page => setPage(_page),
    }),
    [page, pageSize],
  );

  return {
    options,
    paginationProps,
  };
};
