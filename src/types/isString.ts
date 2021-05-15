export const isString = (str?: any): str is string => str && typeof str.valueOf() === 'string';
