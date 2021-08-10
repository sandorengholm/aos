import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Table as ReactNativeTable,
  Row,
  RowProps,
  TableProps,
  Cell,
} from 'react-native-table-component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { sizes, spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';
import { CustomTheme } from '../../../models/theme';

export const Table: React.FC<TableProps> = React.memo((props) => {
  const { children, ...rest } = props;

  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return (
    <View style={styles.container}>
      <ReactNativeTable {...rest}>{children}</ReactNativeTable>
    </View>
  );
});

export const TableTitleRow: React.FC<RowProps> = React.memo((props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return <TableRow style={styles.titleRow} textStyle={styles.titleText} {...props} />;
});

export const TableHeaderRow: React.FC<RowProps> = React.memo((props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  return <TableRow style={styles.headerRow} textStyle={styles.headerText} {...props} />;
});

export const TableRow: React.FC<RowProps> = React.memo((props) => {
  const theme = useCustomTheme();
  const styles = themedStyles(theme);

  const asteriskSymbol = () => (
    <View style={styles.asteriskContainer}>
      <FontAwesome5 name="certificate" size={10} color={theme.colors.text} />
    </View>
  );

  const data = props.data?.map((cell) => {
    if (cell === '*') return asteriskSymbol();
    return cell;
  });

  return <Row textStyle={styles.text} {...{ ...props, data }} />;
});

const themedStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    asteriskContainer: {
      alignItems: 'center',
    },
    container: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: spacing(2),
    },
    headerRow: {
      backgroundColor: theme.colors.primary,
    },
    headerText: {
      textAlign: 'center',
      color: theme.colors.primaryContrast,
      fontSize: sizes.font.xsmall,
      fontWeight: 'bold',
      margin: spacing(1),
    },
    text: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: spacing(1),
      textAlign: 'center',
    },
    titleRow: {
      backgroundColor: theme.colors.border,
    },
    titleText: {
      color: theme.colors.text,
      fontSize: sizes.font.xsmall,
      margin: spacing(2),
    },
  });
