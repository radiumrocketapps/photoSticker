import variables from 'src/config/variables'
import mapBackToFront from './mapBackToFront'
import mapFrontToBack from './mapFrontToBack'

const { API_URL } = variables

const getClient = () => ({
  baseURL: API_URL,
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const parseResponse = (response) => response.json()
  .then((res) => {
    if (!res.success) {
      return Promise.reject(mapBackToFront(res))
    }
    return mapBackToFront(res)
  })

export const get = (endpoint) => fetch(endpoint, { ...getClient(), method: 'GET' })
  .then(parseResponse)

export const post = (endpoint, data = {}) => fetch(endpoint, { ...getClient(), method: 'POST', body: JSON.stringify(mapFrontToBack(data)) })
  .then(parseResponse)
