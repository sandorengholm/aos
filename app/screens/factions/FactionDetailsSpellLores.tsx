import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionEnhancementGroup from '../../components/faction/faction-enhancement-group';
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
        <FactionEnhancementGroup
          key={index}
          name={spellLore.name}
          description={spellLore.description}
          enchancements={spellLore.enhancements}
        />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsSpellLoresScreen);
