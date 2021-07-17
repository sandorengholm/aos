import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionSceneryWarscroll from '../../components/faction/faction-scenery-warscroll';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import RichText from '../../components/shared/rich-text';
import Title from '../../components/shared/title';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsFactionTerrainRules'
>;

const FactionDetailsFactionTerrainRulesScreen = ({ route }: Props) => {
  const { data } = route.params;

  if (!data.length) return null;

  return (
    <CustomScrollView>
      {data.map((factionTerrainRule, index) => (
        <React.Fragment key={index}>
          <Title text={factionTerrainRule.name} />

          <RichText hasMargin={true} text={factionTerrainRule.description} />

          <FactionSceneryWarscroll
            sceneryWarscroll={factionTerrainRule.sceneryWarscroll}
          />
        </React.Fragment>
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsFactionTerrainRulesScreen);
