import { ScaledSize } from 'react-native';

const sizeIncrements = 4;

export const spacing = (value = 1) => {
  return value * sizeIncrements;
};

export const sizes = {
  screenSpacing: spacing(2),
  font: {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 32,
  },
};

export const getWarscrollFullscreenStyles = (window: ScaledSize) => ({
  height: window.width - sizes.screenSpacing * 2,
  width: window.width - sizes.screenSpacing * 2,
});
