import React from 'react';
import { IWeapon } from '../../../models/warscroll';
import ContentItem from '../../shared/content-item/content-item';
import {
  Table,
  TableHeaderRow,
  TableRow,
  TableTitleRow,
} from '../../shared/table/table';

interface WarscrollWeapons {
  weapons: IWeapon[];
}

const WarscrollWeapons: React.FC<WarscrollWeapons> = ({ weapons }) => {
  if (!weapons.length) return null;

  return (
    <ContentItem title="Weapons">
      {weapons.map((weapon: any, index: number) => (
        <Table key={index}>
          <TableTitleRow data={[`${weapon.name} - ${weapon.type}`]} />
          <TableHeaderRow
            data={['Range', 'Attacks', 'Hit', 'Wound', 'Rend', 'Damage']}
          />
          <TableRow
            data={[
              weapon.range,
              weapon.attacks,
              weapon.toHit,
              weapon.toWound,
              weapon.rend,
              weapon.damage,
            ]}
          />
        </Table>
      ))}
    </ContentItem>
  );
};

export default React.memo(WarscrollWeapons);
