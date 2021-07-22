import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import WarscrollListItem from '../../components/warscroll/warscroll-list-item';
import useCustomTheme from '../../hooks/use-custom-theme';
import { CustomTheme } from '../../models/theme';
import { FactionsRootStackParamList } from '../FactionsScreen';

type Props = StackScreenProps<FactionsRootStackParamList, 'FactionDetailsWarscrolls'>;

const FactionDetailsWarscrollsScreen = ({ route, navigation }: Props) => {
  const { data } = route.params;

  if (!data.length) return null;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <WarscrollListItem
          warscroll={item}
          onPress={() =>
            navigation.navigate('FactionDetailsWarscrollDetails', {
              warscroll: item,
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

export default React.memo(FactionDetailsWarscrollsScreen);
