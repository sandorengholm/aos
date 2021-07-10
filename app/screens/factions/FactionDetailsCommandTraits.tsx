import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
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
        <Text key={index}>{commandTrait.name}</Text>
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsCommandTraitsScreen);
