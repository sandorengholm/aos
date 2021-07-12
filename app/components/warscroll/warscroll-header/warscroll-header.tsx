import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IImage } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';
import Title from '../../shared/title';

interface WarscrollHeader {
  name: string;
  flavorText: string;
  image: IImage;
}

const WarscrollHeader: React.FC<WarscrollHeader> = ({
  name,
  flavorText,
  image,
}) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title text={name} />
        <Text style={styles.flavorText}>{flavorText}</Text>
      </View>
      <Image source={{ uri: image.url }} style={styles.image} />
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    flavorText: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      fontStyle: 'italic',
      marginBottom: sizes.spacing(2),
    },
    image: {
      borderRadius: 5,
      marginBottom: sizes.spacing(4),
      marginLeft: sizes.spacing(4),
      height: 170,
      width: 170,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    textContainer: {
      flexShrink: 1,
    },
  });

export default React.memo(WarscrollHeader);
