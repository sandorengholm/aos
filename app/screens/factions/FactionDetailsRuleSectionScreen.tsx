import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import RichText from '../../components/shared/rich-text';
import Rule from '../../components/shared/rule';
import RuleGroup from '../../components/shared/rule-group';
import { sizes } from '../../helpers/sizes';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionDetailsRuleSection'>;

const FactionDetailsRuleSectionScreen = ({ route }: Props) => {
  const { data } = route.params;
  const { description, generalRules, ruleGroups } = data;

  if (!ruleGroups.length && !description && !generalRules.length) return null;

  return (
    <CustomScrollView>
      <View style={styles.container}>
        <RichText hasMargin={Boolean(generalRules.length)} text={description} />

        {generalRules.map((generalRule, index) => (
          <Rule key={index} rule={generalRule} />
        ))}
      </View>

      {ruleGroups.map((ruleGroup, index) => (
        <RuleGroup
          key={index}
          name={ruleGroup.name}
          description={ruleGroup.description}
          rules={ruleGroup.rules}
        />
      ))}
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.spacing(2),
  },
});

export default React.memo(FactionDetailsRuleSectionScreen);
