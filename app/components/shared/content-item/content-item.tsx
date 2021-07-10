import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { CustomTheme } from '../../../models/theme';

interface ContentItem {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ContentItem: React.FC<ContentItem> = ({
  title,
  children,
}: ContentItem) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    content: {
      marginBottom: sizes.spacing(2),
    },
    header: {
      color: theme.colors.text,
      fontSize: sizes.font.small,
      fontWeight: 'bold',
      marginBottom: sizes.spacing(2),
    },
  });

export default React.memo(ContentItem);
