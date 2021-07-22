import React from 'react';
import ContentItem from '../../components/shared/content-item';
import CustomScrollView from '../../components/shared/custom-scroll-view';
import RichText from '../../components/shared/rich-text';
import RuleGroup from '../../components/shared/rule-group';
import WarscrollDamageTable from '../../components/warscroll/warscroll-damage-table';
import WarscrollHeader from '../../components/warscroll/warscroll-header';
import WarscrollKeywords from '../../components/warscroll/warscroll-keywords';
import WarscrollMagic from '../../components/warscroll/warscroll-magic';
import WarscrollStats from '../../components/warscroll/warscroll-stats';
import WarscrollWeapons from '../../components/warscroll/warscroll-weapons';
import { text } from '../../helpers/text';
import { IWarscroll } from '../../models/warscroll';

interface WarscrollDetailsScreen {
  route: {
    params: {
      warscroll: IWarscroll;
    };
  };
}

const WarscrollDetailsScreen = ({ route }: WarscrollDetailsScreen) => {
  const { warscroll } = route.params;

  return (
    <CustomScrollView>
      <WarscrollHeader
        name={text.getFormattedWarscrollName(warscroll)}
        flavorText={warscroll.flavorText}
        image={warscroll.image}
      />

      <WarscrollStats
        wounds={warscroll.wounds}
        save={warscroll.save}
        move={warscroll.move}
        bravery={warscroll.bravery}
        fly={warscroll.fly}
      />

      {warscroll.description && (
        <ContentItem title="Description">
          <RichText text={warscroll.description} />
        </ContentItem>
      )}

      <WarscrollWeapons weapons={warscroll.weapons} />

      <WarscrollDamageTable damageTable={warscroll.damageTable} />

      <RuleGroup name="Abilities" rules={warscroll.abilities} />

      <RuleGroup name="Command Abilities" rules={warscroll.commandAbilities} />

      <WarscrollMagic description={warscroll.magic} spells={warscroll.spells} />

      <WarscrollKeywords keywords={warscroll.keywords} />
    </CustomScrollView>
  );
};

export default React.memo(WarscrollDetailsScreen);
