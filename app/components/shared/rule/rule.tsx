import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SettingsContext } from '../../../contexts/settings-context';
import { sizes } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { IRule } from '../../../models/shared';
import { CustomTheme } from '../../../models/theme';
import RichText from '../rich-text/rich-text';

interface Rule {
  rule: IRule;
}

const Rule: React.FC<Rule> = ({ rule }) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const { settings } = React.useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{rule.name}</Text>
      {settings.showFlavorText && rule.flavorText && (
        <Text style={styles.flavorText}>{rule.flavorText}</Text>
      )}
      <RichText text={rule.description} />
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
    flavorText: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      fontStyle: 'italic',
      marginBottom: sizes.spacing(1),
    },
    header: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      fontWeight: 'bold',
      marginBottom: sizes.spacing(1),
    },
  });

export default React.memo(Rule);
