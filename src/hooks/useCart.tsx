import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Product, Props as ProductProps } from '../components/Product';

type Product = Omit<ProductProps, 'onAddClick'> & { id: string };

type CartContextDTO = {
  products: Product[];
  addProduct: (products: Product) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggle: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextDTO);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const clearCart = useCallback(() => {
    setProducts([]);
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const addProduct = useCallback((product: Product) => {
    setProducts(state => [...state, product]);
    setIsOpen(true);
  }, []);

  const providerValue = useMemo(
    () => ({
      products,
      addProduct,
      clearCart,
      toggle,
      isOpen,
    }),
    [addProduct, clearCart, products, toggle, isOpen],
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
