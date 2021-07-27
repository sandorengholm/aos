import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SettingsContext } from '../../../contexts/settings-context';
import { getWarscrollFullscreenStyles, sizes, spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { IImage } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';
import Title from '../../shared/title';

interface WarscrollHeader {
  name: string;
  flavorText?: string;
  image: IImage;
}

const WarscrollHeader: React.FC<WarscrollHeader> = ({ name, flavorText, image }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);
  const window = useWindowDimensions();
  const { settings } = React.useContext(SettingsContext);

  return (
    <View style={[styles.container, { flexDirection: settings.showFlavorText ? 'row' : 'column' }]}>
      {settings.showFlavorText ? (
        <View style={styles.textContainer}>
          <Title text={name} />
          {flavorText && <Text style={styles.flavorText}>{flavorText}</Text>}
        </View>
      ) : (
        <Title text={name} />
      )}
      {settings.showWarscrollImages && (
        <Image
          source={{ uri: image.url }}
          style={
            settings.showFlavorText
              ? styles.image
              : [styles.imageLarge, getWarscrollFullscreenStyles(window)]
          }
        />
      )}
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    flavorText: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      fontStyle: 'italic',
      marginBottom: spacing(2),
    },
    image: {
      borderRadius: 5,
      marginBottom: spacing(4),
      marginLeft: spacing(4),
      height: 170,
      width: 170,
    },
    imageLarge: {
      borderRadius: 5,
      marginBottom: spacing(4),
    },
    container: {
      flex: 1,
    },
    textContainer: {
      flexShrink: 1,
    },
  });

export default React.memo(WarscrollHeader);
