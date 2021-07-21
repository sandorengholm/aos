import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ListItem from '../../components/shared/list-item';
import useCustomTheme from '../../hooks/useCustomTheme';
import { IBattleplan } from '../../models/battleplan';
import { CustomTheme } from '../../models/theme';
import { getListOfBattleplans } from '../../services/battleplan-service';
import { BattleplansRootStackParamList } from '../BattleplansScreen';

type Props = StackScreenProps<BattleplansRootStackParamList, 'BattleplanList'>;

const BattleplanListScreen = ({ navigation }: Props) => {
  const [battleplanList, setBattleplanList] = React.useState<IBattleplan[]>();
  const [refreshing, setRefreshing] = React.useState(false);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfBattleplans();
    setBattleplanList(data);
    setRefreshing(false);
  }, [setRefreshing, setBattleplanList]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <FlatList
      data={battleplanList}
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
      onRefresh={fetchData}
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
