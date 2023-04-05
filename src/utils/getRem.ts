const defaultFontSize = 16;
export const getRem = (px: number) => {
  return px / defaultFontSize + 'rem';
};
