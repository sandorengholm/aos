import React from 'react';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../../models/theme';

function useCustomTheme() {
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<CustomTheme>(theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return currentTheme;
}

export default useCustomTheme;
