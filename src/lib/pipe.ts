import { compose } from './compose';

export const pipe = (...functions: any[]) =>
  functions.reduceRight((prev, curr) => compose(prev, curr));
