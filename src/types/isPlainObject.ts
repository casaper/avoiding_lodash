export const isPlainObject = (obj: any): boolean =>
  Object.prototype.toString.call(obj) === '[object Object]';
