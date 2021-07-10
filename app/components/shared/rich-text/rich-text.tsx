import React from 'react';
import { StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IRichText } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';

interface RichText {
  text: IRichText;
}

const RichText: React.FC<RichText> = ({ text }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <HTML
      source={{ html: text.html }}
      baseFontStyle={styles.base}
      tagsStyles={{ p: styles.p }}
    />
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    base: {
      color: theme.colors.text,
    },
    p: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: 0,
    },
  });

export default React.memo(RichText);
