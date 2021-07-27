import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { sizes, spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { CustomTheme } from '../../../models/theme';

interface Title {
  text: string;
}

const Title: React.FC<Title> = ({ text }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return <Text style={styles.text}>{text}</Text>;
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: sizes.font.medium,
      fontWeight: 'bold',
      marginBottom: spacing(2),
    },
  });

export default React.memo(Title);
