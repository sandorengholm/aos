import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IFactionSubfaction } from '../../../models/faction';
import { CustomTheme } from '../../../models/theme';
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
          <RichText
            containerStyle={styles.descriptionContainer}
            text={commandTraitDescription}
          />
          <Rule rule={commandTrait} />
        </ContentItem>
      )}

      {artefactOfPower && (
        <ContentItem title="Artefact Of Power">
          <RichText
            containerStyle={styles.descriptionContainer}
            text={artefactOfPowerDescription}
          />
          <Rule rule={artefactOfPower} />
        </ContentItem>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: sizes.spacing(2),
  },
});

export default React.memo(FactionSubfactionItem);
