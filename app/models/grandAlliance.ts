import { IFaction } from './faction';

export interface IGrandAlliance {
  id: string;
  name: string;
  factions: IFaction[];
}
