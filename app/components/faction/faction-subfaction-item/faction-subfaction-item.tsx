import React from 'react';
import { IFactionSubfaction } from '../../../models/faction';
import ContentItem from '../../shared/content-item';
import RichText from '../../shared/rich-text';
import Rule from '../../shared/rule';

const FactionSubfactionItem: React.FC<IFactionSubfaction> = ({
  abilities,
  commandAbilities,
  commandTraitDescription,
  commandTrait,
  artefactOfPowerDescription,
  artefactOfPower,
}) => {
  return (
    <>
      <ContentItem title="Abilities">
        {abilities.map((ability, index) => (
          <Rule key={index} rule={ability} />
        ))}
      </ContentItem>

      <ContentItem title="Command Abilities">
        {commandAbilities.map((commandAbility, index) => (
          <Rule key={index} rule={commandAbility} />
        ))}
      </ContentItem>

      {commandTrait && (
        <ContentItem title="Command Trait">
          <RichText hasMargin={true} text={commandTraitDescription} />
          <Rule rule={commandTrait} />
        </ContentItem>
      )}

      {artefactOfPower && (
        <ContentItem title="Artefact Of Power">
          <RichText hasMargin={true} text={artefactOfPowerDescription} />
          <Rule rule={artefactOfPower} />
        </ContentItem>
      )}
    </>
  );
};

export default React.memo(FactionSubfactionItem);
