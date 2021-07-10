import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
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
        <Text key={index}>{artefactOfPower.name}</Text>
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsArtefactsOfPowerScreen);
