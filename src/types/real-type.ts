const notCorrectRecognizedTypes = ['Number', 'Object', 'Error'];

const evaluateNumberType = (subject: any, strType: string): RealTypeTypes => {
  if (Number.isNaN(subject)) {
    return 'NaN';
  }
  if (!Number.isFinite(subject)) {
    return 'Infinity';
  }
  if (Number.isSafeInteger(subject)) {
    return 'SafeInteger';
  }
  if (Number.isInteger(subject)) {
    return 'UnpreciseInteger';
  }
  if (!Number.isInteger(subject)) {
    return 'Float';
  }
  return strType as RealTypeTypes;
};

/**
 * Will return the more truthfull type than typeof does
 *
 * For Example `typeof /^regex/` returns `'object'`. This will return `'regexp'`.
 *
 * @example
 * ```ts
 * realType() // => 'Undefined'
 * realType(null) // => 'Null'
 * realType('a string') // => 'String'
 * realType(/^[Re]gu[lar]ex$/) // => 'RegExp'
 * realType(new Date()) // => 'Date'
 * realType([1]) // => 'Array'
 * realType(new Int8Array()) // => 'Int8Array'
 * realType(new BigUint64Array()) // => 'BigUint64Array'
 * realType(new Map()) // => 'Map'
 * realType(new WeakMap()) // => 'WeakMap'
 * realType(new Set()) // => 'Set'
 * realType(new WeakSet()) // => 'WeakSet'
 * realType(new ArrayBuffer(8)) // => 'ArrayBuffer'
 * realType(new SharedArrayBuffer(8)) // => 'SharedArrayBuffer'
 * realType(new DataView(new ArrayBuffer(16), 0)) // => 'DataView'
 * realType(() => 'a function') // => 'Function'
 * realType(function* genFunc() { yield console.log('') }) // => 'GeneratorFunction'
 * realType(async () => { await Promise.resolve() }) // => 'AsyncFunction'
 * realType(new Promise((res, re) => res(''))) // => 'Promise'
 * ```
 */
export const realType = (subject?: any): RealTypeTypes => {
  const strType = Object.prototype.toString.call(subject).slice(8, -1);
  if (!notCorrectRecognizedTypes.includes(strType)) {
    return strType as RealTypeTypes;
  }
  if (strType === 'Number') {
    return evaluateNumberType(subject, strType);
  }
  if (strType === 'Error') {
    return ([TypeError, EvalError, SyntaxError, URIError, RangeError, ReferenceError, Error].find(
      (errType) => subject instanceof errType
    )?.name || strType) as RealTypeTypes;
  }
  return strType as RealTypeTypes;
};

export type RealTypeTypes =
  | 'Undefined'
  | 'Null'
  | 'RegExp'
  | 'String'
  | 'BigInt'
  | 'Date'
  | 'Array'
  | 'Symbol'
  | 'Int8Array'
  | 'Uint8Array'
  | 'Uint8ClampedArray'
  | 'Int16Array'
  | 'Uint16Array'
  | 'Int32Array'
  | 'Uint32Array'
  | 'Float32Array'
  | 'Float64Array'
  | 'BigInt64Array'
  | 'BigUint64Array'
  | 'Map'
  | 'WeakMap'
  | 'Set'
  | 'WeakSet'
  | 'ArrayBuffer'
  | 'SharedArrayBuffer'
  | 'Function'
  | 'Generator'
  | 'GeneratorFunction'
  | 'Arguments'
  | 'Number'
  | 'Object'
  | 'Error'
  | 'TypeError'
  | 'EvalError'
  | 'SyntaxError'
  | 'URIError'
  | 'RangeError'
  | 'ReferenceError'
  | 'NaN'
  | 'Infinity'
  | 'SafeInteger'
  | 'UnpreciseInteger'
  | 'Float';
