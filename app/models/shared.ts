export interface IRichText {
  html: string;
}

export interface IImage {
  url: string;
}

export enum WEAPON_TYPE {
  melee = 'Melee',
  missile = 'Missile',
}

export interface ISectionListData<T> {
  title: string;
  data: T[];
}

export interface IRule {
  name: string;
  flavorText: string;
  description: IRichText;
  designersNote: string;
}
