import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RosterListScreen from './rosters/RosterListScreen';

export type RostersRootStackParamList = {
  RosterList: undefined;
};

const Stack = createStackNavigator<RostersRootStackParamList>();

const RostersScreen = () => (
  <Stack.Navigator initialRouteName="RosterList">
    <Stack.Screen name="RosterList" component={RosterListScreen} options={{ title: 'Rosters' }} />
  </Stack.Navigator>
);

export default React.memo(RostersScreen);
