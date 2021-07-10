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
  image: IImage;
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
  commandTraits: ICommandTrait[];
  artefactsOfPower: IArtefactOfPower[];
}

export interface IFactionTerrainRule {
  name: string;
  flavorText: string;
  description: IRichText;
}

export interface IFactionEnhancementGroup {
  name: string;
  description: IRichText;
  commandTraits?: ICommandTrait[];
  artefactsOfPower?: IArtefactOfPower[];
  spellLores?: ISpell[];
}
