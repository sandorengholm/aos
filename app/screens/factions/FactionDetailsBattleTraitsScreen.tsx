import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import Rule from '../../components/shared/rule/rule';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsBattleTraits'
>;

const FactionDetailsBattleTraitsScreen = ({ route }: Props) => {
  const { data } = route.params;

  if (!data.length) return null;

  return (
    <CustomScrollView>
      {data.map((battleTrait, index) => (
        <Rule key={index} rule={battleTrait} />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsBattleTraitsScreen);
