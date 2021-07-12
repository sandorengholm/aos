import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import FactionSceneryWarscroll from '../../components/faction/faction-scenery-warscroll';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import RichText from '../../components/shared/rich-text';
import Title from '../../components/shared/title';
import { sizes } from '../../helpers/sizes';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsFactionTerrainRules'
>;

const FactionDetailsFactionTerrainRulesScreen = ({ route }: Props) => {
  const { faction } = route.params;

  if (!faction?.factionTerrainRules.length) return null;

  return (
    <CustomScrollView>
      {faction.factionTerrainRules.map((factionTerrainRule, index) => (
        <React.Fragment key={index}>
          <Title text={factionTerrainRule.name} />

          <RichText
            containerStyle={styles.descriptionContainer}
            text={factionTerrainRule.description}
          />

          <FactionSceneryWarscroll
            sceneryWarscroll={factionTerrainRule.sceneryWarscroll}
          />
        </React.Fragment>
      ))}
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: sizes.spacing(2),
  },
});

export default React.memo(FactionDetailsFactionTerrainRulesScreen);
