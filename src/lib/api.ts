import axios from 'axios'
import { Trade } from '../types'

export const BASE_URL = 'http://localhost:3001/api/trades'

export const getTrades = async (): Promise<Trade[]>=> {
  return axios.get(BASE_URL).then((res) => res.data)
}
