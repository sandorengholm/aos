import React from 'react';
import {
  IArtefactOfPower,
  ICommandTrait,
  IRichText,
  ISpell,
} from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import RichText from '../../shared/rich-text';
import Rule from '../../shared/rule/rule';

interface FactionEnhancementGroup {
  name: string;
  description: IRichText;
  enchancements?: ICommandTrait[] | IArtefactOfPower[] | ISpell[];
}

const FactionEnhancementGroup: React.FC<FactionEnhancementGroup> = ({
  name,
  description,
  enchancements,
}) => {
  if (!enchancements?.length) return null;

  return (
    <ContentItem title={name}>
      {!!description?.html && <RichText hasMargin={true} text={description} />}
      {enchancements.map((enhancement, index) => (
        <Rule key={index} rule={enhancement} />
      ))}
    </ContentItem>
  );
};

export default React.memo(FactionEnhancementGroup);
