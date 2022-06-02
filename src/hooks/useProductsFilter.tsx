import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Category } from '../graphql/generated/graphql';

export type PriceRange =
  | 'Lower than $20'
  | '$20 - $100'
  | '$100 - $200'
  | 'More than $200';

type ProductsFilterContextDTO = {
  categories: Category[];
  priceRanges: PriceRange[];
  handleFilterByCategory: (value: Category) => void;
  handleFilterByRange: (value: PriceRange) => void;
};

type FilterProviderProps = {
  children: ReactNode;
};

const FilterContext = createContext({} as ProductsFilterContextDTO);

export const ProductsFilterProvider = ({ children }: FilterProviderProps) => {
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [priceRanges, setPriceRanges] = useState<PriceRange[] | null>([]);

  const handleFilterByCategory = useCallback(
    (value: Category) => {
      if (categories.includes(value))
        return setCategories(state =>
          state.filter(category => category !== value),
        );

      return setCategories(state => [...state, value]);
    },
    [categories],
  );

  const handleFilterByRange = useCallback(
    (value: PriceRange) => {
      if (priceRanges.includes(value))
        return setPriceRanges(state => state.filter(range => range !== value));

      return setPriceRanges(state => [...state, value]);
    },
    [priceRanges],
  );

  const providerValue = useMemo(
    () => ({
      categories,
      handleFilterByCategory,
      priceRanges,
      handleFilterByRange,
    }),
    [categories, handleFilterByCategory, handleFilterByRange, priceRanges],
  );

  return (
    <FilterContext.Provider value={providerValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useProductsFilter = () => {
  const context = useContext(FilterContext);

  return context;
};
