import { typedPropGet } from './typedPropGet';

export const pick = <T, K extends keyof T>(object: T, ...picks: K[]): Pick<T, K> => {
  const result: Partial<T> = {};
  picks.forEach((pick: K) => {
    result[pick] = typedPropGet(object, pick);
  });
  return result as Pick<T, K>;
};
