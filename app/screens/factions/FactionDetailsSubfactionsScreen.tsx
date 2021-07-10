import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionSubfactionItem from '../../components/faction/faction-subfaction-item';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsSubfactions'
>;

const FactionDetailsSubfactionsScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.subfactions.length) return null;

  return (
    <CustomScrollView>
      {faction.subfactions.map((subfaction, index) => (
        <FactionSubfactionItem key={index} {...subfaction} />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsSubfactionsScreen);
