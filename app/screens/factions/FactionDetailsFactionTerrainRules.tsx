import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsFactionTerrainRules'
>;

const FactionDetailsFactionTerrainRulesScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.factionTerrainRules.length) return null;

  return (
    <CustomScrollView>
      {faction.factionTerrainRules.map((factionTerrainRule, index) => (
        <Text key={index}>{factionTerrainRule.name}</Text>
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsFactionTerrainRulesScreen);
