import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import Rule from '../../components/shared/rule/rule';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsBattleTraits'
>;

const FactionDetailsBattleTraitsScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.battleTraits.length) return null;

  return (
    <CustomScrollView>
      {faction.battleTraits.map((battleTrait, index) => (
        <Rule key={index} rule={battleTrait} />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsBattleTraitsScreen);
