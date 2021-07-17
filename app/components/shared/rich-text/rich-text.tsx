import React from 'react';
import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IRichText } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';

interface RichText {
  text: IRichText;
  hasMargin?: boolean;
}

// TODO: Make Rich Text Component support tables

const RichText: React.FC<RichText> = ({ text, hasMargin }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  if (!text || !text?.html.length) return null;

  return (
    <View style={hasMargin ? styles.descriptionContainer : undefined}>
      <HTML
        source={{ html: text.html }}
        baseFontStyle={styles.base}
        tagsStyles={{ p: styles.p }}
      />
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    base: {
      color: theme.colors.text,
    },
    descriptionContainer: {
      marginBottom: sizes.spacing(2),
    },
    p: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: 0,
    },
  });

export default React.memo(RichText);
