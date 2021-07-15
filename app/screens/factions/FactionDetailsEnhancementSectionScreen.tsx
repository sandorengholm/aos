import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import FactionEnhancementGroup from '../../components/faction/faction-enhancement-group';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import { FactionsRootStackParamList } from './FactionsScreen';

type Props = StackScreenProps<
  FactionsRootStackParamList,
  'FactionDetailsEnhancementSection'
>;

const FactionDetailsEnhancementSectionScreen = ({ route }: Props) => {
  const { enhancementSection } = route.params;

  if (!enhancementSection.enhancementGroups.length) return null;

  return (
    <CustomScrollView>
      {enhancementSection.enhancementGroups.map((enhancementGroup, index) => (
        <FactionEnhancementGroup
          key={index}
          name={enhancementGroup.name}
          description={enhancementGroup.description}
          enchancements={enhancementGroup.enhancements}
        />
      ))}
    </CustomScrollView>
  );
};

export default React.memo(FactionDetailsEnhancementSectionScreen);
