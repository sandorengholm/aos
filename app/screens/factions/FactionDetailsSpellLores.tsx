import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsSpellLores'
>;

const FactionDetailsSpellLoresScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.spellLores.length) return null;

  return (
    <CustomScrollView>
      {faction.spellLores.map((spellLore, index) => (
        <Text key={index}>{spellLore.name}</Text>
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsSpellLoresScreen);
