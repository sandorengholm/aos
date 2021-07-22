import React from 'react';
import ContentItem from '../../shared/content-item/content-item';
import { Table, TableHeaderRow, TableRow } from '../../shared/table/table';

interface WarscrollStats {
  wounds: string;
  save: string;
  move: string;
  bravery: string;
  fly: boolean;
}

const WarscrollStats: React.FC<WarscrollStats> = ({ wounds, save, move, bravery, fly }) => {
  if (!wounds || !save || !move || !bravery) {
    return null;
  }

  return (
    <ContentItem title="Stats">
      <Table>
        <TableHeaderRow data={['Wounds', 'Save', 'Move', 'Bravery', 'Fly']} />
        <TableRow data={[wounds, save, move, bravery, fly ? 'Yes' : 'No']} />
      </Table>
    </ContentItem>
  );
};

export default React.memo(WarscrollStats);
