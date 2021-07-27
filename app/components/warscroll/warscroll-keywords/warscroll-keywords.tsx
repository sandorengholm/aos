import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes, spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { CustomTheme } from '../../../models/theme';

interface WarscrollKeywords {
  keywords: string[];
}

const WarscrollKeywords: React.FC<WarscrollKeywords> = ({ keywords }) => {
  if (!keywords.length) return null;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keywords</Text>
      <Text style={styles.text}>{keywords.join(', ')}</Text>
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: spacing(2),
    },
    title: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.primaryContrast,
      fontSize: sizes.font.xsmall,
      fontWeight: 'bold',
      padding: spacing(2),
    },
    text: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      fontWeight: 'bold',
      margin: spacing(2),
    },
  });

export default React.memo(WarscrollKeywords);
