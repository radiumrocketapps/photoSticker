import camelCase from 'lodash/camelCase'
import isObjectLike from 'lodash/isObjectLike'
import reduce from 'lodash/reduce'

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
          [camelCase(key)]: arrayResult,
        }
      }

      if (isObjectLike(value)) {
        return {
          ...acc,
          [camelCase(key)]: reducer(value, 0),
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
        [camelCase(key)]: value,
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
