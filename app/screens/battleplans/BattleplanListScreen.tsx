import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../../components/shared/list-item';
import { BattleplanContext } from '../../contexts/battleplan-context';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { BattleplansRootStackParamList } from '../BattleplansScreen';

type Props = StackScreenProps<BattleplansRootStackParamList, 'BattleplanList'>;

const BattleplanListScreen = ({ navigation }: Props) => {
  const { battleplans, refreshData, refreshing } =
    React.useContext(BattleplanContext);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <FlatList
      data={battleplans}
      renderItem={({ item }) => (
        <ListItem
          text={item.name}
          image={item.image}
          onPress={() =>
            navigation.navigate('BattleplanDetails', {
              battleplan: item,
            })
          }
        />
      )}
      refreshing={refreshing}
      onRefresh={refreshData}
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

export default React.memo(BattleplanListScreen);
