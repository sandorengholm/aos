import React from 'react';
import { ISubfaction } from '../../../models/faction';
import RuleGroup from '../../shared/rule-group';

const FactionSubfactionItem: React.FC<ISubfaction> = ({ ruleGroups }) => {
  if (!ruleGroups.length) return null;

  return (
    <>
      {ruleGroups.map((ruleGroup, index) => (
        <RuleGroup
          key={index}
          name={ruleGroup.name}
          description={ruleGroup.description}
          rules={ruleGroup.rules}
        />
      ))}
    </>
  );
};

export default React.memo(FactionSubfactionItem);
