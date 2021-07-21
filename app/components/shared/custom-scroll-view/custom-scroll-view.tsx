import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { CustomTheme } from '../../../models/theme';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const CustomScrollView: React.FC<Props> = ({ children }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: sizes.screenSpacing,
      paddingVertical: sizes.screenSpacing * 2,
    },
    scrollView: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });

export default React.memo(CustomScrollView);
