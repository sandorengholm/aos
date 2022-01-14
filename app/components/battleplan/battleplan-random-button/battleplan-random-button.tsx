import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BattleplanContext } from '../../../contexts/battleplan-context';
import { spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { CustomTheme } from '../../../models/theme';

interface Props {
  navigation: any;
}

const BattleplanRandomButton = ({ navigation }: Props) => {
  const { battleplans } = React.useContext(BattleplanContext);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const onPress = () => {
    navigation.navigate('BattleplanDetails', {
      battleplan: battleplans?.[Math.floor(Math.random() * battleplans.length)],
    });
  };

  return (
    <TouchableHighlight
      underlayColor={theme.colors.card}
      style={styles.touchable}
      onPress={onPress}
    >
      <FontAwesome5 name="dice" size={20} color={theme.colors.primary} />
    </TouchableHighlight>
  );
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    touchable: {
      paddingHorizontal: spacing(4),
    },
  });

export default React.memo(BattleplanRandomButton);
