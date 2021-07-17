import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/useCustomTheme';
import { ISceneryWarscroll } from '../../../models/faction';
import { CustomTheme } from '../../../models/theme';
import ContentItem from '../../shared/content-item';
import RichText from '../../shared/rich-text';
import Rule from '../../shared/rule';
import WarscrollHeader from '../../warscroll/warscroll-header';
import WarscrollKeywords from '../../warscroll/warscroll-keywords';

interface FactionSceneryWarscroll {
  sceneryWarscroll: ISceneryWarscroll;
}

const FactionSceneryWarscroll = ({
  sceneryWarscroll,
}: FactionSceneryWarscroll) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View style={styles.container}>
      <WarscrollHeader
        name={sceneryWarscroll.name}
        flavorText={sceneryWarscroll.flavorText}
        image={sceneryWarscroll.image}
      />

      {sceneryWarscroll.description && (
        <ContentItem title="Description">
          <RichText text={sceneryWarscroll.description} />
        </ContentItem>
      )}

      <ContentItem title="Scenery Rules">
        {sceneryWarscroll.sceneryRules.map((ability, index) => (
          <Rule key={index} rule={ability} />
        ))}
      </ContentItem>

      <WarscrollKeywords keywords={sceneryWarscroll.keywords} />
    </View>
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

export default React.memo(FactionSceneryWarscroll);
