import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { sizes, spacing } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { RostersRootStackParamList } from '../RostersScreen';

type Props = StackScreenProps<RostersRootStackParamList, 'RosterList'>;

const RosterListScreen = ({}: Props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const handlePress = React.useCallback(async () => {
    const url = 'https://www.warhammer-community.com/warscroll-builder/';
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This feature is not in development, but will be coming eventually.
      </Text>
      <Text style={styles.text}>
        We recommend using Games Workshops own army builder until this one is ready:
      </Text>
      <Button title="Warscroll Builder" onPress={handlePress}></Button>
    </View>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: sizes.screenSpacing,
    },
    text: {
      color: theme.colors.text,
      textAlign: 'center',
    },
    title: {
      color: theme.colors.text,
      fontSize: sizes.font.medium,
      fontWeight: 'bold',
      marginBottom: spacing(4),
      textAlign: 'center',
    },
  });

export default React.memo(RosterListScreen);
