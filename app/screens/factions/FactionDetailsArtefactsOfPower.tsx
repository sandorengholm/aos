import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionEnhancementGroup from '../../components/faction/faction-enhancement-group';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsArtefactsOfPower'
>;

const FactionDetailsArtefactsOfPowerScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.artefactsOfPower.length) return null;

  return (
    <CustomScrollView>
      {faction.artefactsOfPower.map((artefactOfPower, index) => (
        <FactionEnhancementGroup
          key={index}
          name={artefactOfPower.name}
          description={artefactOfPower.description}
          enchancements={artefactOfPower.enhancements}
        />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsArtefactsOfPowerScreen);
