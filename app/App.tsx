import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListsScreen from './screens/ListsScreen';
import BattleplansTab from './screens/BattleplansScreen';
import RulesTab from './screens/RulesScreen';
import FactionsScreen from './screens/factions/FactionsScreen';
import WarscrollsScreen from './screens/warscrolls/WarscrollsScreen';
import { useColorScheme } from 'react-native';
import { CustomDarkTheme } from './themes/dark';
import { CustomDefaultTheme } from './themes/light';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar style={'auto'} />
      <NavigationContainer
        theme={scheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}
      >
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName = focused ? 'help' : 'help-outline';

              switch (route.name) {
                case 'Warscrolls':
                  iconName = focused
                    ? 'document-text'
                    : 'document-text-outline';
                  break;
                case 'Factions':
                  iconName = focused ? 'flag' : 'flag-outline';
                  break;
                case 'Lists':
                  iconName = focused ? 'hammer' : 'hammer-outline';
                  break;
                case 'Battleplans':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
                case 'Rules':
                  iconName = focused ? 'receipt' : 'receipt-outline';
                  break;
                case 'Settings':
                  iconName = focused ? 'cog' : 'cog-outline';
                  break;
                default:
                  break;
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor:
              scheme === 'dark'
                ? CustomDarkTheme.colors.primary
                : CustomDefaultTheme.colors.primary,
            inactiveTintColor:
              scheme === 'dark'
                ? CustomDarkTheme.colors.text
                : CustomDefaultTheme.colors.text,
            labelStyle: {
              fontSize: 9,
            },
            tabStyle: {
              paddingBottom: 5,
            },
          }}
        >
          <Tab.Screen name="Warscrolls" component={WarscrollsScreen} />
          <Tab.Screen name="Factions" component={FactionsScreen} />
          <Tab.Screen name="Lists" component={ListsScreen} />
          <Tab.Screen name="Battleplans" component={BattleplansTab} />
          <Tab.Screen name="Rules" component={RulesTab} />
          <Tab.Screen name="Settings" component={RulesTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;