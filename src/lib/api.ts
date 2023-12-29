import axios from 'axios'
import { StreamTrade, Trade } from '../types'

export const BASE_URL = process.env.REACT_APP_BACKEND_URL 
const token = localStorage.getItem('token')

export const authConfig = {
  headers: {
      Authorization:`bearer ${token}`
  }
}

export const getTrades = async (): Promise<Trade[]>=> {
  return axios.get(BASE_URL + '/api/trades', authConfig).then((res) => res.data)
}

export const getStreamsWithTrades = async (): Promise<StreamTrade[]>=> {
  return axios.get(BASE_URL + '/api/streams/with-trades', authConfig).then((res) => res.data)
}

export const getStreams = async (): Promise<StreamTrade[]>=> {
  return axios.get(BASE_URL + '/api/streams', authConfig).then((res) => res.data)
}