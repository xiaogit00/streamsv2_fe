import { ColdStreamsCalc, Trade } from "../types";

export const calculateColdStreams = (trades: Trade[]): ColdStreamsCalc => {

    const { qtyOpen, totalCost, totalQty, totalSoldValue } = trades.reduce(
        (acc, curr) => {
        if (curr.type) {
            acc.qtyOpen += curr.qty
            acc.totalCost += Number(curr.price * curr.qty)
            acc.totalQty += curr.qty
        } else {
            acc.qtyOpen -= curr.qty
            acc.totalSoldValue += Number(curr.price * curr.qty)
        }
        return acc
        },
        { 
            qtyOpen: 0, 
            totalCost: 0, 
            totalQty: 0,
            totalSoldValue: 0
        })
    const firstHeldUnix = trades.reduce((acc, curr) => {
        if (new Date(curr.date).valueOf() < acc) return new Date(curr.date).valueOf()
        else return acc
    }, new Date(trades[0].date).valueOf())
    const qtySold = totalQty - qtyOpen
    const avgBuyPrice = Number((totalCost / totalQty).toFixed(2))
    const avgSellPrice = Number((totalSoldValue / qtySold).toFixed(2))
    const purchaseValueOpen = qtyOpen * avgBuyPrice
    // In this case, realizedReturns is avgSellPrice/avgBuyPrice - 1
    const realizedReturns = avgSellPrice/avgBuyPrice - 1
    const realizedReturnsNet = realizedReturns * qtySold

    return {
        ticker: trades[0].ticker,
        name: trades[0].name,
        currency: trades[0].currency,
        firstHeld: new Date(firstHeldUnix),
        totalQty,
        qtyOpen,
        qtySold,
        avgBuyPrice,
        avgSellPrice,
        purchaseValueOpen,
        realizedReturns,
        realizedReturnsNet
    }
}