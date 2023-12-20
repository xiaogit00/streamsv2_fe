import axios from 'axios'
import { Trade } from '../types'

export const BASE_URL = process.env.REACT_APP_BACKEND_URL + '/api/trades'

export const getTrades = async (): Promise<Trade[]>=> {
  return axios.get(BASE_URL).then((res) => res.data)
}
