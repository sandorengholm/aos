import { IImage, IRichText, IRule, WEAPON_TYPE } from './shared';

export interface IWarscroll {
  id: string;
  name: string;
  subname: string;
  image: IImage;
  move: string;
  save: string;
  bravery: string;
  wounds: string;
  flavorText: string;
  description: IRichText;
  fly: boolean;
  weapons: IWeapon[];
  damageTable: IDamageTable;
  abilities: IRule[];
  magic: IRichText;
  casts: number;
  unbinds: number;
  spells: IRule[];
  commandAbilities: IRule[];
  keywords: string[];
  pointCost: number;
  battlefieldRole: string[];
  unitSize: number;
  notes: IRichText;
}

export interface IWeapon {
  name: string;
  type: WEAPON_TYPE;
  range: string;
  attacks: string;
  toHit: string;
  toWound: string;
  rend: string;
  damage: string;
}

export interface IDamageTable {
  woundsSuffered: string[];
  damageTableEntries: IDamageTableEntry[];
}

export interface IDamageTableEntry {
  name: string;
  values: string[];
}
