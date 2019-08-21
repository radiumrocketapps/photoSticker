// @flow

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255,255,255'
}

type Colors = {
  greenLight: string,
  white: string,
  black: string,
  gray: string,
  red: string,
  whiteOpacity: (op: number) => string,
}

const colors: Colors = {
  greenLight: '#41A337',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#393d42',
  red: '#FF3230',
  whiteOpacity: (op) => `rgba(255,255,255,0.${parseInt(op, 10)})`,
  withOpacity: (color, op) => `rgba(${hexToRgb(color)}, 0.${parseInt(op, 10)})`,
}

export default colors
