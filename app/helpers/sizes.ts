const sizeIncrements = 4;

export const sizes = {
  spacing: (value = 1) => {
    return value * sizeIncrements;
  },
  screenSpacing: sizeIncrements * 3,
  font: {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 32,
  },
};
