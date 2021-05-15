export const isEmpty = (obj?: any): boolean =>
  Boolean([Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length);
