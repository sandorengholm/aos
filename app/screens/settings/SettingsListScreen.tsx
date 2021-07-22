import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { SettingsContext } from '../../contexts/settings-context';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { SettingsRootStackParamList } from '../SettingsScreen';

type Props = StackScreenProps<SettingsRootStackParamList, 'SettingsList'>;

const SettingsListScreen = ({}: Props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const { settings, setSettings } = React.useContext(SettingsContext);

  const onChange = (value: boolean) => {
    setSettings({
      showFlavorText: value,
    });
  };

  return (
    <CustomScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Show Flavor Text</Text>
        <Switch
          onValueChange={onChange}
          value={settings.showFlavorText}
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
