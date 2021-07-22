import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, SectionList, Text } from 'react-native';
import ListItem from '../../components/shared/list-item';
import { sizes } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/use-custom-theme';
import { IFaction } from '../../models/faction';
import { ISectionListData } from '../../models/shared';
import { CustomTheme } from '../../models/theme';
import { getListOfFactions } from '../../services/faction-service';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionList'>;

const FactionListScreen = ({ navigation }: Props) => {
  const [factionList, setFactionList] = React.useState<ISectionListData<IFaction>[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfFactions();
    if (data) {
      setFactionList(data);
    }
    setRefreshing(false);
  }, [setRefreshing, setFactionList]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SectionList
      initialNumToRender={50}
      stickySectionHeadersEnabled={true}
      sections={factionList}
      renderItem={({ item }) => (
        <ListItem
          text={item.name}
          onPress={() => navigation.navigate('FactionDetails', { faction: item })}
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      refreshing={refreshing}
      onRefresh={fetchData}
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
    header: {
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      fontSize: sizes.font.medium,
      fontWeight: 'bold',
      padding: sizes.spacing(3),
    },
    separator: {
      backgroundColor: theme.colors.border,
      height: 1,
    },
  });

export default React.memo(FactionListScreen);
