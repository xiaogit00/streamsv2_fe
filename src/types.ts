export interface Trade {
    id: string,
    ticker: string,
    name: string,
    qty: number,
    price: number,
    type: boolean,
    currency: string,
    exchange: string,
    cost: number,
    exchange_fees: number,
    date: Date,
    close_id: string | null
}

export interface GroupedTrades {
    [key: string]: Trade[]
}

export interface SelectedStock {
    currency: string,
    exchangeShortName: string,
    name: string,
    stockExchange: string,
    symbol: string
}

export type NewTrade = Omit<Trade, 'id'>

export interface ErrorProps {
    errors: any,
    touched: any
  }

