import { Theme } from '@react-navigation/native';

export type CustomTheme = Theme & {
  colors: {
    primaryContrast?: string;
  };
};
