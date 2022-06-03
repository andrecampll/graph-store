import { useCallback, useMemo, useState } from 'react';
import {
  ProductOrderByInput,
  useGetProductsQuery,
} from '../graphql/generated/graphql';
import { useProductsFilter } from './useProductsFilter';
import { useProductsPagination } from './useProductsPagination';

export const useProducts = () => {
  const [orderBy, setOrderBy] = useState(ProductOrderByInput.PriceDesc);

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

  const handleChangeOrderType = useCallback(
    (value: ProductOrderByInput) =>
      setOrderBy(value || ProductOrderByInput.PriceDesc),
    [],
  );

  const toggleOrderBy = useCallback(() => {
    if (orderBy === ProductOrderByInput.NameAsc)
      return setOrderBy(ProductOrderByInput.NameDesc);
    if (orderBy === ProductOrderByInput.NameDesc)
      return setOrderBy(ProductOrderByInput.NameAsc);

    if (orderBy === ProductOrderByInput.PriceDesc)
      return setOrderBy(ProductOrderByInput.PriceAsc);

    return setOrderBy(ProductOrderByInput.PriceDesc);
  }, [orderBy]);

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
      orderBy: orderBy || undefined,
      ...options,
    },
  });

  return {
    productsData: data,
    paginationProps,
    handleChangeOrderType,
    orderBy,
    toggleOrderBy,
  };
};
