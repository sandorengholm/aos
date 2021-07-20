import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useCustomTheme from '../../hooks/useCustomTheme';
import { CustomTheme } from '../../models/theme';
import { BattleplansRootStackParamList } from '../BattleplansScreen';

type Props = StackScreenProps<
  BattleplansRootStackParamList,
  'BattleplanDetails'
>;

const BattleplanDetailsScreen = ({ route, navigation }: Props) => {
  const { battleplan } = route.params;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return <Text>Battleplan</Text>;
};

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    separator: {
      backgroundColor: theme.colors.border,
      height: 1,
    },
  });

export default React.memo(BattleplanDetailsScreen);
