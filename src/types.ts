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

export interface ProcessedTrades {
    ticker: string,
    name: string,
    currency: string,
    openShares: number,
    avgCostBasis: number,
    purchaseValue: number,
    firstHeld: Date,
    returns_percent: number,
    returns_net: number
  }

export interface SelectedStock {
    currency: string,
    exchangeShortName: string,
    name: string,
    stockExchange: string,
    symbol: string
}

export interface BuyTradesById {
    [key: string]: Trade
  }

export type NewTrade = Omit<Trade, 'id'>

export interface ErrorProps {
    errors: any,
    touched: any
  }

