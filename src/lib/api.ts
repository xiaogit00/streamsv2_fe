import axios from 'axios'
import { NewStream, NewStreamWithTrades, NewTrade, StreamTrade, Trade } from '../types'

export const BASE_URL = window.location.origin

export const getTrades = async (): Promise<Trade[]>=> {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve([]))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.get(BASE_URL + '/api/trades', authConfig).then((res) => res.data)
}

export const createTrade = async (newTrade: NewTrade) => {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve({}))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.post(window.location.origin + '/api/trades', newTrade, authConfig)
}

export const deleteTrade = async (tradeId: string) => {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve([]))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.delete(window.location.origin + `/api/trades/${tradeId}`, authConfig)
}

export const getStreamsWithTrades = async (): Promise<StreamTrade[]>=> {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve([]))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.get(BASE_URL + '/api/streams/with-trades', authConfig).then((res) => res.data)
}

export const getStreams = async (): Promise<StreamTrade[]>=> {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve([]))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.get(BASE_URL + '/api/streams', authConfig).then((res) => res.data)
}

export const createStream = async (newStream: NewStream) => {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve({}))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.post(window.location.origin + '/api/streams', newStream, authConfig)
}

export const createStreamAndAssign = async (newStream: NewStreamWithTrades) => {
    const token = localStorage.getItem('token')
    if (!token) return new Promise((resolve) => resolve({}))
    const authConfig = {
      headers: {
          Authorization:`bearer ${token}`
      }
    }
    const res = await axios.post(window.location.origin + '/api/streams', newStream, authConfig)
    const streamId = res.data.id
    const bulkAssignPayload = {
        stream_id: streamId,
        trades: newStream.trades
    }
    return axios.post(window.location.origin + '/api/stream-trades/bulk-assign', bulkAssignPayload, authConfig)
}

export const deleteStream = async (streamId: string) => {
  const token = localStorage.getItem('token')
  if (!token) return new Promise((resolve) => resolve({}))
  const authConfig = {
    headers: {
        Authorization:`bearer ${token}`
    }
  }
  return axios.delete(window.location.origin + `/api/streams/${streamId}`, authConfig)
}