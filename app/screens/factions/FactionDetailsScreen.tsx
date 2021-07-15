import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { FactionsRootStackParamList } from './FactionsScreen';
import ListItem from '../../components/shared/list-item';
import useCustomTheme from '../../hooks/useCustomTheme';
import { CustomTheme } from '../../models/theme';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionDetails'>;

type DataProps = {
  route: keyof FactionsRootStackParamList;
  title: string;
};

const FactionDetailsScreen = ({ route, navigation }: Props) => {
  const { faction } = route.params;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const data: DataProps[] = [
    ...([
      {
        route: 'FactionDetailsBattleTraits',
        title: 'Battle Traits',
      },
      {
        route: 'FactionDetailsSubfactions',
        title: 'Subfactions',
      },
      {
        route: 'FactionDetailsWarscrolls',
        title: 'Warscrolls',
      },
      {
        route: 'FactionDetailsFactionTerrainRules',
        title: 'Faction Terrain Rules',
      },
    ] as DataProps[]),
    ...faction.enhancementSections?.map(
      (enhancementSection) =>
        ({
          route: 'FactionDetailsEnhancementSection',
          title: enhancementSection.name,
        } as DataProps)
    ),
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem
          text={item.title}
          onPress={() =>
            navigation.navigate(item.route, { faction, title: item.title })
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

export default React.memo(FactionDetailsScreen);
