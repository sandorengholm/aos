import React from 'react';
import { StyleSheet, Text, SectionList, View } from 'react-native';
import WarscrollListItem from '../../components/warscroll/warscroll-list-item';
import { WarscrollContext } from '../../contexts/warscroll-context';
import { sizes, spacing } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';

const WarscrollListScreen = ({ navigation }: any) => {
  const { warscrollList, refreshData, refreshing } = React.useContext(WarscrollContext);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  if (!warscrollList) return null;

  return (
    <SectionList
      initialNumToRender={20}
      stickySectionHeadersEnabled={true}
      sections={warscrollList.filter((item) => item.data.length)}
      renderItem={({ item }) => (
        <WarscrollListItem
          warscroll={item}
          onPress={() => navigation.navigate('WarscrollDetails', { warscroll: item })}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      style={styles.container}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      refreshing={refreshing}
      onRefresh={refreshData}
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
      padding: spacing(3),
      color: theme.colors.text,
    },
    separator: {
      backgroundColor: theme.colors.border,
      height: 1,
    },
  });

export default React.memo(WarscrollListScreen);
