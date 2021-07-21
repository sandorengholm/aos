import { IImage, IRichText } from './shared';

export interface IBattleplan {
  name: string;
  battleplanSections: IBattleplanSection[];
  image: IImage;
}

export interface IBattleplanSection {
  name: string;
  description: IRichText;
}
