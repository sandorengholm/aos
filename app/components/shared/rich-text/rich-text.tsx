import React from 'react';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
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
  const window = useWindowDimensions();

  if (!text || !text?.html.length) return null;

  return (
    <View style={hasMargin ? styles.descriptionContainer : undefined}>
      <RenderHtml
        source={{ html: text.html }}
        baseStyle={styles.base}
        tagsStyles={{
          p: styles.p,
          table: styles.table,
          thead: styles.thead,
          td: styles.td,
          li: styles.li,
        }}
        contentWidth={window.width}
      />
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    base: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
    },
    descriptionContainer: {
      marginBottom: sizes.spacing(2),
    },
    li: {
      marginBottom: sizes.spacing(2),
    },
    p: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: 0,
    },
    table: {
      marginTop: sizes.spacing(4),
      marginHorizontal: -sizes.spacing(2),
    },
    thead: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.primaryContrast,
      fontWeight: 'bold',
      fontSize: sizes.font.xsmall,
    },
    td: {
      margin: sizes.spacing(1),
      textAlign: 'center',
      fontSize: sizes.font.xsmall,
    },
  });

export default React.memo(RichText);
