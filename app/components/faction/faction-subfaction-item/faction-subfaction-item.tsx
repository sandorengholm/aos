import React from 'react';
import { IFactionSubfaction } from '../../../models/faction';
import ContentItem from '../../shared/content-item';
import RichText from '../../shared/rich-text';
import Rule from '../../shared/rule';

const FactionSubfactionItem: React.FC<IFactionSubfaction> = ({
  subfactionRulesets,
}) => {
  return (
    <>
      {subfactionRulesets.map((subfactionRuleset, index) => (
        <ContentItem key={index} title={subfactionRuleset.name}>
          <RichText hasMargin={true} text={subfactionRuleset.description} />
          {subfactionRuleset.rules.map((rule, index) => (
            <Rule key={index} rule={rule} />
          ))}
        </ContentItem>
      ))}
    </>
  );
};

export default React.memo(FactionSubfactionItem);
