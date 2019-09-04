
import snakeCase from 'lodash/snakeCase'
import isObjectLike from 'lodash/isObjectLike'
import reduce from 'lodash/reduce'

const snakeCaseNumber = (string) => snakeCase(string)
  .split('_')
  // eslint-disable-next-line no-restricted-globals
  .map((item, index) => ((index !== 0 && isNaN(parseInt(item[0], 10))) ? `_${item}` : item))
  .join('')

// Standardize camelCasing convention
const reducer = (el) => {
  if (typeof el === 'string') return el
  return reduce(
    el,
    (acc, value, key) => {
      if (Array.isArray(value)) {
        const arrayResult = value.map((item, ind) => {
          if (typeof item === 'number') return item
          return reducer(item, ind)
        })
        return {
          ...acc,
          [snakeCaseNumber(key)]: arrayResult,
        }
      }

      if (isObjectLike(value)) {
        return {
          ...acc,
          [snakeCaseNumber(key)]: reducer(value, 0),
        }
      }

      if (isObjectLike(value)) {
        const accum = reduce(
          value,
          (accCounters, valueCounter, keyCounter) => {
            const newKey = unescape(keyCounter).indexOf('@##@') === -1
              ? unescape(keyCounter)
              : unescape(keyCounter).replace(/@##@/g, '.')
            return {
              ...accCounters,
              [newKey]: valueCounter,
            }
          },
          {},
        )
        return {
          ...acc,
          [key]: accum,
        }
      }

      return {
        ...acc,
        [snakeCaseNumber(key)]: value,
      }
    },
    {},
  )
}

export default (elements) => {
  if (Array.isArray(elements)) {
    return elements.map((el) => reducer(el))
  }
  if (isObjectLike(elements)) {
    return reducer(elements, 0)
  }
  return elements
}
