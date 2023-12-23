import { Trade, BuyTradesById } from "../types";
import _ from 'lodash'

export const getOpenBuyTrades = (trades: Trade[]) => {
    const openBuyTrades = _.cloneDeep(trades)
    const openBuyTradesDict = openBuyTrades
        .filter((trade) => trade.type)
        .reduce((acc: BuyTradesById, obj) => {
            acc[obj.id] = obj
            return acc
            }, {})
    const sellTrades = trades.filter((trade) => !trade.type)
    sellTrades.map((sellTrade) => {
        if (!sellTrade.close_id) return null 
        openBuyTradesDict[sellTrade.close_id].qty -= sellTrade.qty
        return null
    })
    const openBuyTradesArray: Trade[] = Object.values(openBuyTradesDict).filter(trade => trade.qty > 0) // O(N)
    return openBuyTradesArray
}