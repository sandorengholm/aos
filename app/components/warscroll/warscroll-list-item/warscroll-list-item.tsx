import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fonts } from '../../../helpers/fonts';
import { sizes } from '../../../helpers/sizes';
import { text } from '../../../helpers/text';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { CustomTheme } from '../../../models/theme';
import { IWarscroll } from '../../../models/warscroll';

interface WarscrollListItem {
  warscroll: IWarscroll;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const WarscrollListItem = ({ warscroll, onPress }: WarscrollListItem) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {warscroll.image?.url ? (
          <Image source={{ uri: warscroll.image.url }} style={styles.image} />
        ) : (
          <View style={styles.missingImage} />
        )}
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {text.getFormattedWarscrollName(warscroll)}
          </Text>
          <Text style={styles.text}>
            Unit Size: {warscroll.unitSize || '1'}
          </Text>
          <Text style={styles.text}>
            Point Cost: {warscroll.pointCost || '?'}
          </Text>
          <Text style={styles.text}>
            Battlefield Role:{' '}
            {!!warscroll.battlefieldRole.length
              ? warscroll.battlefieldRole
              : 'None'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: sizes.spacing(1),
      paddingVertical: sizes.spacing(2),
    },
    image: {
      borderRadius: 5,
      height: 70,
      width: 70,
    },
    missingImage: {
      backgroundColor: theme.colors.border,
      borderRadius: 5,
      height: 70,
      width: 70,
    },
    text: {
      fontFamily: fonts.regular,
      fontSize: sizes.font.xsmall,
      marginBottom: sizes.spacing(1),
      color: theme.colors.text,
    },
    textContainer: {
      flex: 1,
      paddingLeft: sizes.spacing(2),
    },
    title: {
      fontFamily: fonts.regular,
      fontSize: sizes.font.xsmall,
      fontWeight: 'bold',
      marginBottom: sizes.spacing(1),
      color: theme.colors.text,
    },
  });

export default React.memo(WarscrollListItem);
