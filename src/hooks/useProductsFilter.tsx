import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Category } from '../graphql/generated/graphql';

type ProductsFilterContextDTO = {
  categories: Category[];
  handleFilter: (value: Category) => void;
};

type FilterProviderProps = {
  children: ReactNode;
};

const FilterContext = createContext({} as ProductsFilterContextDTO);

export const ProductsFilterProvider = ({ children }: FilterProviderProps) => {
  const [categories, setCategories] = useState<Category[] | null>([]);

  const handleFilter = useCallback(
    (value: Category) => {
      if (categories.includes(value))
        return setCategories(state =>
          state.filter(category => category !== value),
        );

      return setCategories(state => [...state, value]);
    },
    [categories],
  );

  const providerValue = useMemo(
    () => ({
      categories,
      handleFilter,
    }),
    [categories, handleFilter],
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
