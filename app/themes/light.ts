import { DefaultTheme } from '@react-navigation/native';
import { CustomTheme } from '../models/theme';

export const CustomDefaultTheme: CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: 'rgb(16, 148, 199)',
    primaryContrast: 'white',
  },
};
