import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FactionListScreen from './FactionListScreen';
import FactionDetailsScreen from './FactionDetailsScreen';
import FactionDetailsBattleTraitsScreen from './FactionDetailsBattleTraitsScreen';
import FactionDetailsSubfactionsScreen from './FactionDetailsSubfactionsScreen';
import { IFaction, IFactionSubfaction } from '../../models/faction';
import FactionDetailsWarscrolls from './FactionDetailsWarscrolls';
import FactionDetailsFactionTerrainRules from './FactionDetailsFactionTerrainRules';
import FactionDetailsCommandTraits from './FactionDetailsCommandTraits';
import FactionDetailsArtefactsOfPower from './FactionDetailsArtefactsOfPower';
import FactionDetailsSpellLores from './FactionDetailsSpellLores';
import WarscrollDetailsScreen from '../warscrolls/WarscrollDetailsScreen';
import { IWarscroll } from '../../models/warscroll';
import FactionDetailsSubfactionDetailsScreen from './FactionDetailsSubfactionDetailsScreen';

export type FactionsRootStackParamList = {
  FactionList: undefined;
  FactionDetails: {
    faction: IFaction;
  };
  FactionDetailsBattleTraits: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsSubfactions: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsSubfactionDetails: {
    subfaction: IFactionSubfaction;
    title: string;
  };
  FactionDetailsWarscrolls: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsWarscrollDetails: {
    warscroll: IWarscroll;
  };
  FactionDetailsFactionTerrainRules: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsCommandTraits: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsArtefactsOfPower: {
    faction: IFaction;
    title: string;
  };
  FactionDetailsSpellLores: {
    faction: IFaction;
    title: string;
  };
};

const Stack = createStackNavigator<FactionsRootStackParamList>();

const FactionsScreen = () => {
  return (
    <Stack.Navigator initialRouteName="FactionList">
      <Stack.Screen
        name="FactionList"
        component={FactionListScreen}
        options={{ title: 'Factions' }}
      />
      <Stack.Screen
        name="FactionDetails"
        component={FactionDetailsScreen}
        options={({ route }) => ({ title: route.params.faction.name })}
      />
      <Stack.Screen
        name="FactionDetailsBattleTraits"
        component={FactionDetailsBattleTraitsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsSubfactions"
        component={FactionDetailsSubfactionsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsSubfactionDetails"
        component={FactionDetailsSubfactionDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="FactionDetailsWarscrolls"
        component={FactionDetailsWarscrolls}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsWarscrollDetails"
        component={WarscrollDetailsScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="FactionDetailsFactionTerrainRules"
        component={FactionDetailsFactionTerrainRules}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsCommandTraits"
        component={FactionDetailsCommandTraits}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsArtefactsOfPower"
        component={FactionDetailsArtefactsOfPower}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="FactionDetailsSpellLores"
        component={FactionDetailsSpellLores}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default React.memo(FactionsScreen);
