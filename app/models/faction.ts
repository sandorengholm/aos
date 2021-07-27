import { IImage, IRichText, IRule, IRuleGroup, IRuleSection } from './shared';
import { IWarscroll } from './warscroll';

export interface IFaction {
  id: string;
  name: string;
  warscrolls: IWarscroll[];
  allies: IFaction[];
  battleTraits: IRule[];
  subfactions: ISubfaction[];
  factionTerrainRules: IFactionTerrainRule[];
  ruleSections: IRuleSection[];
}

export interface ISubfaction {
  name: string;
  ruleGroups: IRuleGroup[];
}

export interface IFactionTerrainRule {
  name: string;
  description: IRichText;
  sceneryWarscrolls: ISceneryWarscroll[];
}

export interface ISceneryWarscroll {
  name: string;
  flavorText: string;
  description: IRichText;
  image: IImage;
  sceneryRules: IRule[];
  keywords: string[];
}
