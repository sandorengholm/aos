import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fonts } from '../../../helpers/fonts';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { CustomTheme } from '../../../models/theme';

interface ListItem {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ListItem: React.FC<ListItem> = ({ text, onPress }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: sizes.screenSpacing,
      paddingVertical: sizes.spacing(4),
    },
    text: {
      color: theme.colors.text,
      fontFamily: fonts.regular,
      fontSize: sizes.font.small,
      marginBottom: sizes.spacing(1),
    },
  });

export default React.memo(ListItem);
