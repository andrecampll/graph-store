import { useState, useCallback } from 'react';

const stringify = (value: unknown) => {
  try {
    return JSON.stringify(value);
  } catch {
    return JSON.stringify(null);
  }
};

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const persistedValue = localStorage.getItem(key);

    if (persistedValue === null) {
      localStorage.setItem(key, stringify(defaultValue));

      return defaultValue;
    }

    return parse(persistedValue);
  });

  const setStorageValue = useCallback(
    (newValue: T) => {
      setValue(newValue);
      localStorage.setItem(key, stringify(newValue));
    },
    [key],
  );

  return [value, setStorageValue] as const;
};

export default useLocalStorage;
