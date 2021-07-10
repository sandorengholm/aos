import React from 'react';
import { ICommandAbility } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import Rule from '../../shared/rule/rule';

interface WarscrollCommandAbilities {
  commandAbilities: ICommandAbility[];
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
