import { create } from 'zustand'

const useStore = create((set) => ({
  trades: [],
  setTrades: (trades: any) => set(() => ({ trades: trades })),
}))

export { useStore }
