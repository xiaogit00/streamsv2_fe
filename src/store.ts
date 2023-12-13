import { create } from 'zustand'
import { getTrades } from './services/trades'
import { process } from './utils/holdings'

const useStore = create((set) => ({
  trades: [],
  setTrades: (trades: any) => set(() => ({ trades: trades })),
}))

export { useStore }
