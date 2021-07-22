import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionSubfactionItem from '../../components/faction/faction-subfaction-item';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionDetailsSubfactionDetails'>;

const FactionDetailsSubfactionDetailsScreen = ({ route }: Props) => {
  const { subfaction } = route.params;

  if (!subfaction) return null;

  return (
    <CustomScrollView>
      <FactionSubfactionItem {...subfaction} />
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsSubfactionDetailsScreen);
