import React from 'react';
import { IRichText } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import RichText from '../../shared/rich-text/rich-text';

interface WarscrollDescription {
  description?: IRichText;
}

const WarscrollDescription: React.FC<WarscrollDescription> = ({
  description,
}) => {
  if (!description?.html) {
    return null;
  }

  return (
    <ContentItem title="Description">
      <RichText text={description} />
    </ContentItem>
  );
};

export default React.memo(WarscrollDescription);
