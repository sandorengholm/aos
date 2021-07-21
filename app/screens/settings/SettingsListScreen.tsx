import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import useCustomTheme from '../../hooks/useCustomTheme';
import { CustomTheme } from '../../models/theme';
import { SettingsRootStackParamList } from '../SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = StackScreenProps<SettingsRootStackParamList, 'SettingsList'>;

const SettingsListScreen = ({}: Props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled((prev) => {
      AsyncStorage.setItem('minimalistic', JSON.stringify(!prev));
      return !prev;
    });
  };

  const fetchSettings = React.useCallback(async () => {
    const minimalistic = await AsyncStorage.getItem('minimalistic');
    if (minimalistic) {
      setIsEnabled(JSON.parse(minimalistic));
    }
  }, []);

  React.useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <CustomScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Minimalistic</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          trackColor={{
            false: theme.colors.border,
            true: theme.colors.primary,
          }}
        ></Switch>
      </View>
    </CustomScrollView>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      color: theme.colors.text,
    },
  });

export default React.memo(SettingsListScreen);
