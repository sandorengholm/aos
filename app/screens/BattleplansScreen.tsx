import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BattleplanListScreen from './battleplans/BattleplanListScreen';
import { IBattleplan } from '../models/battleplan';
import BattleplanDetailsScreen from './battleplans/BattleplanDetailsScreen';

export type BattleplansRootStackParamList = {
  BattleplanList: undefined;
  BattleplanDetails: {
    battleplan: IBattleplan;
  };
};

const Stack = createStackNavigator<BattleplansRootStackParamList>();

const BattleplansScreen = () => {
  return (
    <Stack.Navigator initialRouteName="BattleplanList">
      <Stack.Screen
        name="BattleplanList"
        component={BattleplanListScreen}
        options={{ title: 'Battleplans' }}
      />
      <Stack.Screen
        name="BattleplanDetails"
        component={BattleplanDetailsScreen}
        options={({ route }) => ({ title: route.params.battleplan.name })}
      />
    </Stack.Navigator>
  );
};

export default React.memo(BattleplansScreen);
