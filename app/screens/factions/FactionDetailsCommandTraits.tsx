import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionEnhancementGroup from '../../components/faction/faction-enhancement-group';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsCommandTraits'
>;

const FactionDetailsCommandTraitsScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.commandTraits.length) return null;

  return (
    <CustomScrollView>
      {faction.commandTraits.map((commandTrait, index) => (
        <FactionEnhancementGroup
          key={index}
          name={commandTrait.name}
          description={commandTrait.description}
          enchancements={commandTrait.enhancements}
        />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsCommandTraitsScreen);
