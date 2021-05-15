export const keyBy = <T, K extends keyof T>(array: T[], key: K): { [key: string]: T } =>
  (array || []).reduce((prev, curr: T) => ({ ...prev, [`${curr[key]}`]: curr }), {});
