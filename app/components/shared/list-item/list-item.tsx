import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { IImage } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';

interface ListItem {
  text: string;
  image?: IImage;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ListItem: React.FC<ListItem> = ({ text, image, onPress }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const imageAspectRatio = image
    ? (image?.height || 1) / (image?.width || 1)
    : 1;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={image ? styles.containerWithImage : styles.container}>
        {image && (
          <Image
            source={{ uri: image.url }}
            style={{
              width: 75,
              height: 75 * imageAspectRatio,
              marginRight: sizes.spacing(2),
            }}
          />
        )}
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
    containerWithImage: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      paddingHorizontal: sizes.screenSpacing,
      paddingVertical: sizes.spacing(2),
    },
    text: {
      color: theme.colors.text,
      fontSize: sizes.font.small,
      marginBottom: sizes.spacing(1),
    },
  });

export default React.memo(ListItem);
