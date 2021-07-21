import React from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { BattleplansRootStackParamList } from '../BattleplansScreen';
import { useWindowDimensions } from 'react-native';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { sizes } from '../../helpers/sizes';
import Rule from '../../components/shared/rule';

type Props = StackScreenProps<
  BattleplansRootStackParamList,
  'BattleplanDetails'
>;

const BattleplanDetailsScreen = ({ route }: Props) => {
  const { battleplan } = route.params;

  const window = useWindowDimensions();

  if (!battleplan?.battleplanSections?.length) return null;

  return (
    <CustomScrollView>
      {battleplan.battleplanSections.map((battleplanSection, index) => (
        <Rule
          key={index}
          rule={{
            name: battleplanSection.name,
            description: battleplanSection.description,
          }}
        />
      ))}

      {battleplan.image && (
        <Image
          source={{ uri: battleplan.image.url }}
          style={{
            width: window.width - sizes.screenSpacing * 2,
            height:
              (window.width - sizes.screenSpacing * 2) *
              ((battleplan.image.height || 1) / (battleplan.image.width || 1)),
          }}
        />
      )}
    </CustomScrollView>
  );
};

export default React.memo(BattleplanDetailsScreen);
