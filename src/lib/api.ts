import axios from 'axios'
import { StreamTrade, Trade } from '../types'

export const BASE_URL = process.env.REACT_APP_BACKEND_URL 

export const getTrades = async (): Promise<Trade[]>=> {
  return axios.get(BASE_URL + '/api/trades').then((res) => res.data)
}

export const getStreams = async (): Promise<StreamTrade[]>=> {
  return axios.get(BASE_URL + '/api/streams/with-trades').then((res) => res.data)
}