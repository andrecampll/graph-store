import { useMemo } from 'react';
import { useGetProductsQuery } from '../graphql/generated/graphql';
import { useProductsFilter } from './useProductsFilter';
import { useProductsPagination } from './useProductsPagination';

export const useProducts = () => {
  const { categories, priceRanges } = useProductsFilter();

  const { options, paginationProps } = useProductsPagination({
    appliedFilters: {
      categories,
      priceRanges,
    },
  });

  const rangeConditions = useMemo(
    () =>
      priceRanges.map(range => {
        if (range === 'Lower than $20')
          return {
            AND: [
              {
                price_lt: 19,
              },
            ],
          };

        if (range === '$20 - $100')
          return {
            AND: [
              {
                price_gt: 20,
                price_lt: 99,
              },
            ],
          };

        if (range === '$100 - $200')
          return {
            AND: [
              {
                price_gt: 100,
                price_lt: 200,
              },
            ],
          };

        if (range === 'More than $200')
          return {
            price_gt: 200,
          };

        return undefined;
      }),
    [priceRanges],
  );

  const { data } = useGetProductsQuery({
    variables: {
      where: {
        AND: [
          {
            featured: false,
            category_in: categories.length ? categories : undefined,
            OR: rangeConditions,
          },
        ],
      },
      ...options,
    },
  });

  return {
    productsData: data,
    paginationProps,
  };
};
