import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import { IRichText, IRule } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import RichText from '../../shared/rich-text/rich-text';
import Rule from '../../shared/rule/rule';

interface WarscrollMagic {
  description?: IRichText;
  spells?: IRule[];
}

const WarscrollMagic: React.FC<WarscrollMagic> = ({ description, spells }) => {
  if (!spells?.length && !description?.html) return null;

  return (
    <ContentItem title="Magic">
      {description?.html && (
        <View style={styles.container}>
          <RichText text={description} />
        </View>
      )}
      {spells?.map((spell, index) => (
        <Rule key={index} rule={spell} />
      ))}
    </ContentItem>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.spacing(2),
  },
});

export default React.memo(WarscrollMagic);
