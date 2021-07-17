import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FactionListScreen from './FactionListScreen';
import FactionDetailsScreen from './FactionDetailsScreen';
import FactionDetailsBattleTraitsScreen from './FactionDetailsBattleTraitsScreen';
import FactionDetailsSubfactionsScreen from './FactionDetailsSubfactionsScreen';
import {
  IFaction,
  ISubfaction,
  IFactionTerrainRule,
} from '../../models/faction';
import FactionDetailsWarscrolls from './FactionDetailsWarscrolls';
import FactionDetailsFactionTerrainRules from './FactionDetailsFactionTerrainRules';
import WarscrollDetailsScreen from '../warscrolls/WarscrollDetailsScreen';
import { IWarscroll } from '../../models/warscroll';
import FactionDetailsSubfactionDetailsScreen from './FactionDetailsSubfactionDetailsScreen';
import { IRule, IRuleSection } from '../../models/shared';
import FactionDetailsRuleSectionScreen from './FactionDetailsRuleSectionScreen';

export type FactionsRootStackParamList = {
  FactionList: undefined;
  FactionDetails: {
    faction: IFaction;
  };
  FactionDetailsBattleTraits: {
    data: IRule[];
    title: string;
  };
  FactionDetailsSubfactions: {
    data: ISubfaction[];
    title: string;
  };
  FactionDetailsSubfactionDetails: {
    subfaction: ISubfaction;
    title: string;
  };
  FactionDetailsWarscrolls: {
    data: IWarscroll[];
    title: string;
  };
  FactionDetailsWarscrollDetails: {
    warscroll: IWarscroll;
  };
  FactionDetailsFactionTerrainRules: {
    data: IFactionTerrainRule[];
    title: string;
  };
  FactionDetailsRuleSection: {
    data: IRuleSection;
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
        name="FactionDetailsRuleSection"
        component={FactionDetailsRuleSectionScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default React.memo(FactionsScreen);
