import React from 'react';
import { IRule } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import Rule from '../../shared/rule/rule';

interface WarscrollCommandAbilities {
  commandAbilities: IRule[];
}

const WarscrollCommandAbilities: React.FC<WarscrollCommandAbilities> = ({
  commandAbilities,
}) => {
  if (!commandAbilities.length) return null;

  return (
    <ContentItem title="Command Abilities">
      {commandAbilities.map((commandAbility, index) => (
        <Rule key={index} rule={commandAbility} />
      ))}
    </ContentItem>
  );
};

export default React.memo(WarscrollCommandAbilities);
