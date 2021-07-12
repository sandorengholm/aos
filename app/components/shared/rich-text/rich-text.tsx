import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import HTML from 'react-native-render-html';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IRichText } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';

interface RichText {
  text: IRichText;
  containerStyle?: StyleProp<ViewStyle>;
}

const RichText: React.FC<RichText> = ({ text, containerStyle }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View style={containerStyle}>
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
    p: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: 0,
    },
  });

export default React.memo(RichText);
