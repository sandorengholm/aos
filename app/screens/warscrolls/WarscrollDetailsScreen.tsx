import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import WarscrollAbilities from '../../components/warscroll/warscroll-abilities';
import WarscrollCommandAbilities from '../../components/warscroll/warscroll-command-abilities';
import WarscrollDamageTable from '../../components/warscroll/warscroll-damage-table';
import WarscrollDescription from '../../components/warscroll/warscroll-description';
import WarscrollHeader from '../../components/warscroll/warscroll-header';
import WarscrollKeywords from '../../components/warscroll/warscroll-keywords';
import WarscrollMagic from '../../components/warscroll/warscroll-magic';
import WarscrollStats from '../../components/warscroll/warscroll-stats';
import WarscrollWeapons from '../../components/warscroll/warscroll-weapons';
import { sizes } from '../../helpers/sizes';
import { text } from '../../helpers/text';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { IWarscroll } from '../../models/warscroll';

interface WarscrollDetailsScreen {
  route: {
    params: {
      warscroll: IWarscroll;
    };
  };
}

const WarscrollDetailsScreen = ({ route }: WarscrollDetailsScreen) => {
  const { warscroll } = route.params;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <WarscrollHeader
          name={text.getFormattedWarscrollName(warscroll)}
          flavorText={warscroll.flavorText}
          image={warscroll.image}
        />

        <WarscrollStats
          wounds={warscroll.wounds}
          save={warscroll.save}
          move={warscroll.move}
          bravery={warscroll.bravery}
          fly={warscroll.fly}
        />

        <WarscrollDescription description={warscroll.description} />

        <WarscrollWeapons weapons={warscroll.weapons} />

        <WarscrollDamageTable damageTable={warscroll.damageTable} />

        <WarscrollAbilities abilities={warscroll.abilities} />

        <WarscrollCommandAbilities
          commandAbilities={warscroll.commandAbilities}
        />

        <WarscrollMagic magic={warscroll.magic} spells={warscroll.spells} />

        <WarscrollKeywords keywords={warscroll.keywords} />
      </View>
    </ScrollView>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: sizes.screenSpacing,
      paddingVertical: sizes.screenSpacing * 2,
    },
    scrollView: {
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      flex: 1,
    },
  });

export default React.memo(WarscrollDetailsScreen);
