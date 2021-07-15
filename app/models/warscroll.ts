import {
  IImage,
  IRichText,
  IRule,
  ISectionListData,
  WEAPON_TYPE,
} from './shared';

export interface IWarscrollList {
  factions: ISectionListData<IWarscroll>[];
}

export interface IWarscroll {
  id: string;
  name: string;
  subname: string;
  image: IImage;
  factions: IWarscrollFaction;
  move: string;
  save: string;
  bravery: string;
  wounds: string;
  flavorText: string;
  description: IRichText;
  fly: boolean;
  weapons: IWarscrollWeapon[];
  damageTable: IWarscrollDamageTable;
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

export interface IWarscrollWeapon {
  name: string;
  type: WEAPON_TYPE;
  range: string;
  attacks: string;
  toHit: string;
  toWound: string;
  rend: string;
  damage: string;
}

export interface IWarscrollDamageTable {
  woundsSuffered: string[];
  damageTableEntries: IWarscrollDamageTableEntry[];
}

export interface IWarscrollDamageTableEntry {
  name: string;
  values: string[];
}

export interface IWarscrollFaction {
  id: string;
  name: string;
}
