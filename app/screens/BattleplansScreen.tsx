import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BattleplanListScreen from './battleplans/BattleplanListScreen';
import { IBattleplan } from '../models/battleplan';
import BattleplanDetailsScreen from './battleplans/BattleplanDetailsScreen';
import BattleplanRandomButton from '../components/battleplan/battleplan-random-button';
import BattleplanProvider from '../contexts/battleplan-context';

export type BattleplansRootStackParamList = {
  BattleplanList: undefined;
  BattleplanDetails: {
    battleplan: IBattleplan;
  };
};

const Stack = createStackNavigator<BattleplansRootStackParamList>();

const BattleplansScreen = () => {
  return (
    <BattleplanProvider>
      <Stack.Navigator initialRouteName="BattleplanList">
        <Stack.Screen
          name="BattleplanList"
          component={BattleplanListScreen}
          options={({ navigation }) => ({
            title: 'Battleplans',
            headerRight: () => <BattleplanRandomButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="BattleplanDetails"
          component={BattleplanDetailsScreen}
          options={({ route }) => ({ title: route.params.battleplan?.name })}
        />
      </Stack.Navigator>
    </BattleplanProvider>
  );
};

export default React.memo(BattleplansScreen);
