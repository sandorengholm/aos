export interface IRichText {
  html: string;
}

export interface IImage {
  url: string;
  height?: number;
  width?: number;
}

export enum WEAPON_TYPE {
  melee = 'Melee',
  missile = 'Missile',
}

export enum RULE_TYPE {}

export enum BATTLEFIELD_ROLE {}

export interface ISectionListData<T> {
  title: string;
  data: T[];
}

export interface IRule {
  name: string;
  flavorText?: string;
  description: IRichText;
}

export interface IRuleGroup {
  name: string;
  description: IRichText;
  rules: IRule[];
}

export interface IRuleSection {
  name: string;
  description: IRichText;
  generalRules: IRule[];
  ruleGroups: IRuleGroup[];
}
