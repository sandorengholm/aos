import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import { IRichText } from '../../../models/shared';
import { ISpell } from '../../../models/shared';
import ContentItem from '../../shared/content-item/content-item';
import RichText from '../../shared/rich-text/rich-text';
import Rule from '../../shared/rule/rule';

interface WarscrollMagic {
  magic?: IRichText;
  spells?: ISpell[];
}

const WarscrollMagic: React.FC<WarscrollMagic> = ({ magic, spells }) => {
  if (!spells?.length && !magic?.html) return null;

  return (
    <ContentItem title="Magic">
      {!!magic?.html && (
        <View style={styles.container}>
          <RichText text={magic} />
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
