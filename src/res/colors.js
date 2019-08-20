// @flow

type Colors = {
  greenLight: string,
  white: string,
  black: string,
  whiteOpacity: (op: number) => string,
}

const colors: Colors = {
  greenLight: '#41A337',
  white: '#FFFFFF',
  black: '#000000',
  whiteOpacity: (op) => `rgba(255,255,255,0.${parseInt(op, 10)})`,
}

export default colors
