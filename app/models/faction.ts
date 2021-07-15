import { IImage, IRichText, IRule } from './shared';
import { IWarscroll } from './warscroll';

export interface IFaction {
  id: string;
  name: string;
  warscrolls: IWarscroll[];
  allies: IFaction[];
  canBeAlliedIn: IFaction[];
  battleTraits: IFactionBattleTrait[];
  subfactions: IFactionSubfaction[];
  factionTerrainRules: IFactionTerrainRule[];
  enhancementSections: IFactionEnhancementSection[];
}

export interface IFactionBattleTrait extends IRule {}

export interface IFactionSubfaction {
  name: string;
  subfactionRulesets: IFactionSubfactionRuleset[];
}

export interface IFactionSubfactionRuleset {
  name: string;
  description: IRichText;
  rules: IRule[];
}

export interface IFactionTerrainRule {
  name: string;
  flavorText: string;
  description: IRichText;
  sceneryWarscroll: IFactionSceneryWarscroll;
}

export interface IFactionSceneryWarscroll {
  name: string;
  flavorText: string;
  description: IRichText;
  image: IImage;
  sceneryRules: IRule[];
  keywords: string[];
}

export interface IFactionEnhancementSection {
  name: string;
  description: IRichText;
  enhancementGroups: IFactionEnhancementGroup[];
}

export interface IFactionEnhancementGroup {
  name: string;
  description: IRichText;
  enhancements?: IRule[];
}
