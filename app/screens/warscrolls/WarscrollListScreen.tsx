import React from 'react';
import { StyleSheet, Text, SectionList, View } from 'react-native';
import WarscrollListItem from '../../components/warscroll/warscroll-list-item';
import { sizes } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/useCustomTheme';
import { CustomTheme } from '../../models/theme';
import { IWarscrollList } from '../../models/warscroll';
import { getListOfWarscrolls } from '../../services/warscroll-service';

const WarscrollListScreen = ({ navigation }: any) => {
  const [warscrollList, setWarscrollList] = React.useState<IWarscrollList>();
  const [refreshing, setRefreshing] = React.useState(false);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const fetchData = React.useCallback(async () => {
    setRefreshing(true);
    const data = await getListOfWarscrolls();
    setWarscrollList(data);
    setRefreshing(false);
  }, [setRefreshing, setWarscrollList]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!warscrollList) return null;

  return (
    <SectionList
      sections={warscrollList.factions}
      renderItem={({ item }) => (
        <WarscrollListItem
          warscroll={item}
          onPress={() =>
            navigation.navigate('WarscrollDetails', { warscroll: item })
          }
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
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
      fontSize: sizes.font.medium,
      fontWeight: 'bold',
      padding: sizes.spacing(3),
      color: theme.colors.text,
    },
    separator: {
      backgroundColor: theme.colors.border,
      height: 1,
    },
  });

export default React.memo(WarscrollListScreen);