import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { spacing } from '../../../helpers/sizes';
import useCustomTheme from '../../../hooks/use-custom-theme';

interface Props {
  onPress: () => void;
}

const RefreshButton = ({ onPress }: Props) => {
  const theme = useCustomTheme();

  return (
    <TouchableHighlight
      underlayColor={theme.colors.card}
      style={styles.touchable}
      onPress={onPress}
    >
      <Ionicons name="refresh" size={20} color={theme.colors.primary} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    paddingHorizontal: spacing(4),
  },
});

export default React.memo(RefreshButton);
