import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { SettingsContext } from '../../contexts/settings-context';
import { spacing } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/use-custom-theme';
import { ISettings } from '../../models/settings';
import { CustomTheme } from '../../models/theme';
import { SettingsRootStackParamList } from '../SettingsScreen';

type Props = StackScreenProps<SettingsRootStackParamList, 'SettingsList'>;

const SettingsListScreen = ({}: Props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const { settings, setSettings } = React.useContext(SettingsContext);

  const onChange = (value: Partial<ISettings>) => {
    setSettings({
      ...settings,
      ...value,
    } as ISettings);
  };

  return (
    <CustomScrollView>
      <View style={styles.item}>
        <Text style={styles.text}>Show Flavor Text</Text>
        <Switch
          onValueChange={(value) => onChange({ showFlavorText: value })}
          value={settings.showFlavorText}
          trackColor={{
            false: theme.colors.border,
            true: theme.colors.primary,
          }}
        ></Switch>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Show Warscroll Images</Text>
        <Switch
          onValueChange={(value) => onChange({ showWarscrollImages: value })}
          value={settings.showWarscrollImages}
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
    item: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: spacing(4),
    },
    text: {
      color: theme.colors.text,
    },
  });

export default React.memo(SettingsListScreen);
