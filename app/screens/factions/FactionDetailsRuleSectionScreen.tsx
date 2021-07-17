import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import RuleGroup from '../../components/shared/rule-group';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsRuleSection'
>;

const FactionDetailsRuleSectionScreen = ({ route }: Props) => {
  const { data } = route.params;
  const { ruleGroups } = data;

  if (!ruleGroups.length) return null;

  return (
    <CustomScrollView>
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

export default React.memo(FactionDetailsRuleSectionScreen);
