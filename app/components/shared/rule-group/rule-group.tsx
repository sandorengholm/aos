import React from 'react';
import { IRichText, IRule } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import RichText from '../../shared/rich-text';
import Rule from '../../shared/rule/rule';

interface RuleGroup {
  name: string;
  description: IRichText;
  rules?: IRule[];
}

const RuleGroup: React.FC<RuleGroup> = ({ name, description, rules }) => {
  if (!rules?.length && !name && !description) return null;

  return (
    <ContentItem title={name}>
      <RichText hasMargin={true} text={description} />
      {rules?.map((rule, index) => (
        <Rule key={index} rule={rule} />
      ))}
    </ContentItem>
  );
};

export default React.memo(RuleGroup);
