import React from 'react';
import { IWarscrollDamageTable } from '../../../models/warscroll';
import ContentItem from '../../shared/content-item/content-item';
import { Table, TableHeaderRow, TableRow } from '../../shared/table/table';

interface WarscrollDamageTable {
  damageTable: IWarscrollDamageTable;
}

const WarscrollDamageTable: React.FC<WarscrollDamageTable> = ({
  damageTable,
}) => {
  if (
    !damageTable?.woundsSuffered?.length ||
    !damageTable?.damageTableEntries?.length
  )
    return null;

  return (
    <ContentItem title="Damage Table">
      <Table>
        <TableHeaderRow
          data={[
            'Wounds',
            ...damageTable.damageTableEntries.map(
              (damageTableEntry) => damageTableEntry.name
            ),
          ]}
        />
        {damageTable.woundsSuffered.map((wounds, index) => (
          <TableRow
            key={index}
            data={[
              wounds,
              ...damageTable.damageTableEntries.map(
                (damageTableEntry) => damageTableEntry.values[index]
              ),
            ]}
          />
        ))}
      </Table>
    </ContentItem>
  );
};

export default React.memo(WarscrollDamageTable);
