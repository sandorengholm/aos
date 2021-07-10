import { DarkTheme } from '@react-navigation/native';
import { CustomTheme } from '../models/theme';

export const CustomDarkTheme: CustomTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(16, 148, 199)',
    primaryContrast: 'white',
  },
};
