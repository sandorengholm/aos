import { IWarscroll } from '../models/warscroll';

export const text = {
  getFormattedWarscrollName: (warscroll: IWarscroll) => {
    return `${warscroll.name}${warscroll.subname ? `, ${warscroll.subname}` : ''}`;
  },
  getBattlefieldRoles: (battlefieldRoles: string[]) => {
    if (battlefieldRoles.length) {
      return battlefieldRoles.join(', ');
    } else {
      return 'None';
    }
  },
};
