import React from 'react';
import { IAbility } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import Rule from '../../shared/rule/rule';

interface WarscrollAbilities {
  abilities: IAbility[];
}

const WarscrollAbilities: React.FC<WarscrollAbilities> = ({ abilities }) => {
  if (!abilities.length) return null;

  return (
    <ContentItem title="Abilities">
      {abilities.map((ability, index) => (
        <Rule key={index} rule={ability} />
      ))}
    </ContentItem>
  );
};

export default React.memo(WarscrollAbilities);
