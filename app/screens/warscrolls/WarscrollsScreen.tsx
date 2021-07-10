import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WarscrollListScreen from './WarscrollListScreen';
import WarscrollDetailsScreen from './WarscrollDetailsScreen';

const Stack = createStackNavigator();

const WarscrollsScreen = () => {
  return (
    <Stack.Navigator initialRouteName="WarscrollList">
      <Stack.Screen
        name="WarscrollList"
        component={WarscrollListScreen}
        options={{ title: 'Warscrolls' }}
      />
      <Stack.Screen
        name="WarscrollDetails"
        component={WarscrollDetailsScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(WarscrollsScreen);
