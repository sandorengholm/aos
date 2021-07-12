import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../../components/shared/list-item';
import useCustomTheme from '../../hooks/useCustomTheme';
import { CustomTheme } from '../../models/theme';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsSubfactions'
>;

const FactionDetailsSubfactionsScreen = ({ route, navigation }: Props) => {
  const { faction } = route.params;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  if (!faction?.subfactions.length) return null;

  return (
    <FlatList
      data={faction.subfactions}
      renderItem={({ item }) => (
        <ListItem
          text={item.name}
          onPress={() =>
            navigation.navigate('FactionDetailsSubfactionDetails', {
              subfaction: item,
              title: item.name,
            })
          }
        />
      )}
      style={styles.container}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
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

export default React.memo(FactionDetailsSubfactionsScreen);
