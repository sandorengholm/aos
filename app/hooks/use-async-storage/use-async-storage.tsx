import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAsyncStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = React.useState(initialValue);

  React.useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      setStoredValue(value ? JSON.parse(value) : initialValue);
    });
  }, [key, initialValue, setStoredValue]);

  const setValue = React.useCallback(
    (value: T) => {
      setStoredValue(value);
      AsyncStorage.setItem(key, JSON.stringify(value));
    },
    [setStoredValue]
  );

  return [storedValue, setValue];
}

export default useAsyncStorage;
