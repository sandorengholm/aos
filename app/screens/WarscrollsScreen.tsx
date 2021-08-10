import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WarscrollListScreen from './warscrolls/WarscrollListScreen';
import WarscrollDetailsScreen from './warscrolls/WarscrollDetailsScreen';
import RefreshButton from '../components/shared/refresh-button';
import WarscrollProvider, { WarscrollContext } from '../contexts/warscroll-context';

const Stack = createStackNavigator();

const WarscrollRefreshButton = () => {
  const { refreshData } = React.useContext(WarscrollContext);
  return <RefreshButton onPress={refreshData} />;
};

const WarscrollsScreen = () => {
  return (
    <WarscrollProvider>
      <Stack.Navigator initialRouteName="WarscrollList">
        <Stack.Screen
          name="WarscrollList"
          component={WarscrollListScreen}
          options={{
            title: 'Warscrolls',
            headerRight: () => <WarscrollRefreshButton />,
          }}
        />
        <Stack.Screen
          name="WarscrollDetails"
          component={WarscrollDetailsScreen}
          options={{
            title: '',
            headerRight: () => <WarscrollRefreshButton />,
          }}
        />
      </Stack.Navigator>
    </WarscrollProvider>
  );
};

export default React.memo(WarscrollsScreen);
