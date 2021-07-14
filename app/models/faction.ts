import {
  IAbility,
  IArtefactOfPower,
  ICommandAbility,
  ICommandTrait,
  IImage,
  IRichText,
  IRule,
  ISpell,
} from './shared';
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
  commandTraits: IFactionEnhancementGroup[];
  commandTraitDescription: IRichText;
  artefactsOfPower: IFactionEnhancementGroup[];
  artefactsOfPowerDescription: IRichText;
  spellLores: IFactionEnhancementGroup[];
  spellLoresDescription: IRichText;
}

export interface IFactionBattleTrait extends IRule {}

export interface IFactionSubfaction {
  name: string;
  flavorText: string;
  description: IRichText;
  image: IImage;
  abilities: IAbility[];
  commandAbilities: ICommandAbility[];
  commandTraitDescription: IRichText;
  commandTrait: ICommandTrait;
  artefactOfPowerDescription: IRichText;
  artefactOfPower: IArtefactOfPower;
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
  sceneryRules: IAbility[];
  keywords: string[];
}

export interface IFactionEnhancementGroup {
  name: string;
  description: IRichText;
  enhancements?: ICommandTrait[] | IArtefactOfPower[] | ISpell[];
}
