// @flow
import { get } from 'src/helpers/api'
import variables from 'src/config/variables'

const { API_URL } = variables


// eslint-disable-next-line import/prefer-default-export
export const getStickers = (search: string = '') => get(`${API_URL}/api/stickers/${search}`)
