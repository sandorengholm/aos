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
  data: any;
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
        data: faction.battleTraits,
      },
    ] as DataProps[]),
    ...(faction.subfactions.length
      ? ([
          {
            route: 'FactionDetailsSubfactions',
            title: 'Subfactions',
            data: faction.subfactions,
          },
        ] as DataProps[])
      : []),
    ...([
      {
        route: 'FactionDetailsWarscrolls',
        title: 'Warscrolls',
        data: faction.warscrolls,
      },
    ] as DataProps[]),
    ...(faction.factionTerrainRules.length
      ? ([
          {
            route: 'FactionDetailsFactionTerrainRules',
            title: 'Faction Terrain Rules',
            data: faction.factionTerrainRules,
          },
        ] as DataProps[])
      : []),
    ...faction.ruleSections?.map(
      (ruleSection) =>
        ({
          route: 'FactionDetailsRuleSection',
          title: ruleSection.name,
          data: ruleSection,
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
            navigation.navigate(item.route, {
              data: item.data,
              title: item.title,
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

export default React.memo(FactionDetailsScreen);
