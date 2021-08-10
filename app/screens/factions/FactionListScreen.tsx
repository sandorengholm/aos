import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, SectionList, Text } from 'react-native';
import ListItem from '../../components/shared/list-item';
import { FactionContext } from '../../contexts/faction-context';
import { sizes, spacing } from '../../helpers/sizes';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionList'>;

const FactionListScreen = ({ navigation }: Props) => {
  const { factionList, refreshData, refreshing } = React.useContext(FactionContext);

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

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
      color: theme.colors.text,
      fontSize: sizes.font.medium,
      fontWeight: 'bold',
      padding: spacing(3),
    },
    separator: {
      backgroundColor: theme.colors.border,
      height: 1,
    },
  });

export default React.memo(FactionListScreen);
