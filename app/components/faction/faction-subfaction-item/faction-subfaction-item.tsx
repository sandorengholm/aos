import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { IFactionSubfaction } from '../../../models/faction';
import { CustomTheme } from '../../../models/theme';
import ContentItem from '../../shared/content-item';
import Rule from '../../shared/rule';

const FactionSubfactionItem: React.FC<IFactionSubfaction> = ({
  name,
  abilities,
  commandAbilities,
  commandTraits,
  artefactsOfPower,
}) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <ContentItem title={name}>
      <View style={styles.container}>
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

        <ContentItem title="Command Traits">
          {commandTraits.map((commandTrait, index) => (
            <Rule key={index} rule={commandTrait} />
          ))}
        </ContentItem>

        <ContentItem title="Artefacts Of Power">
          {artefactsOfPower.map((artefactOfPower, index) => (
            <Rule key={index} rule={artefactOfPower} />
          ))}
        </ContentItem>
      </View>
    </ContentItem>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: sizes.spacing(2),
      padding: sizes.spacing(2),
    },
  });

export default React.memo(FactionSubfactionItem);
