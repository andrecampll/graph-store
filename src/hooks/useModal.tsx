import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ModalContextDTO = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggle: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext({} as ModalContextDTO);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const providerValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggle,
    }),
    [isOpen, toggle],
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};
