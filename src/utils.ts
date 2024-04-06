/**
 * Check if the object has the key
 * @param { object } obj
 * @param { string } key
 */
export const has = (obj: object, key: string) => {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(obj, key);
};


/**
 * Check if the value is empty
 * @param value
 */
export const isEmpty = (
  value:
    null | undefined | string | unknown[] |
    object | number |
    Map<any, any> | Set<any>
): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (typeof value === 'object') {
    if (value instanceof Map) {
      return value.size === 0;
    }
    if (value instanceof WeakMap) {
      throw new Error('WeakMap is not supported');
    }
    if (value instanceof Set) {
      return value.size === 0;
    }
    if (value instanceof WeakSet) {
      throw new Error('WeakSet is not supported');
    }
    return Object.keys(value || {}).length === 0;
  }

  if (typeof value === 'number') {
    return false;
  }

  throw new Error('Unsupported type');
}
