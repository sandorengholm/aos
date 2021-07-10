export const text = {
  getFormattedWarscrollName: (warscroll: any) => {
    return `${warscroll.name}${
      warscroll.subname ? `, ${warscroll.subname}` : ''
    }`;
  },
};
