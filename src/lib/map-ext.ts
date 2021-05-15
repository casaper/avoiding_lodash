import { realType } from './real-type';

export class MapExt extends Map {
  public static fromObject(obj: { [key: string]: any }): MapExt {
    return new MapExt(Object.entries(obj));
  }

  public static fromJson(json: string): MapExt {
    return MapExt.fromObject(JSON.parse(json));
  }

  public get valuesArray(): any[] {
    return Array.from(this.values());
  }
  public get entriesArray(): [any, any][] {
    return Array.from(this.entries());
  }

  constructor(init?: [any, any][]) {
    super();
    if (init) {
      init.forEach(([key, value]) => this.set(key, value));
    }
  }

  public toObject(): { [key: string]: any } {
    return Object.fromEntries(
      this.entriesArray.map(([key, value]) => [this.stringifyKey(key), value])
    );
  }

  public toJson(): string {
    return JSON.stringify(this.toObject());
  }

  private stringifyKey(key: any): string {
    const keyType = realType(key);
    if (keyType === 'Date') {
      return key.toJSON();
    }
    if (['RegExp', 'Function'].includes(keyType)) {
      return key.toString();
    }
    if (keyType === 'Symbol') {
      return (key as symbol).description || '';
    }
    if (['Array', 'Object'].includes(keyType)) {
      return JSON.stringify(key);
    }
    return `${key}`;
  }
}

type Arr = readonly any[];

export function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}
const a: string[] = ['asdf', 'asdf'];
const b: number[] = [1, 2];

const tryout = concat(a, b);

const another = tryout[1];
