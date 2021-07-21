import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SettingsListScreen from './settings/SettingsListScreen';

export type SettingsRootStackParamList = {
  SettingsList: undefined;
};

const Stack = createStackNavigator<SettingsRootStackParamList>();

const SettingsTab = () => (
  <Stack.Navigator initialRouteName="SettingsList">
    <Stack.Screen
      name="SettingsList"
      component={SettingsListScreen}
      options={{ title: 'Settings' }}
    />
  </Stack.Navigator>
);

export default React.memo(SettingsTab);
