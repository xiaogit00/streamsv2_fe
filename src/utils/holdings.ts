import _ from 'lodash'
import { Trade } from '../types'
// This is the core engine that turns an array of trades into intelligible holdings.

const process = (trades: Trade[], mktPrice: number | null) => {
  // For fields: qty, avgCostBasis
  let newTrades = _.cloneDeep(trades)
  const { openShares, totalCost, totalShares } = trades.reduce(
    (acc, curr) => {
      if (curr.type) {
        acc.openShares += curr.qty
        acc.totalCost += Number(curr.cost)
        acc.totalShares += curr.qty
      } else {
        acc.openShares -= curr.qty
      }
      return acc
    },
    { openShares: 0, totalCost: 0, totalShares: 0 },
  )

  const closedShares = totalShares - openShares


  // For unRealizedReturns, purchaseValue, and currentValue
  let buyTrades = newTrades
    .filter((trade) => trade.type)
    .reduce((acc, obj) => {
      // O(N)
      acc[obj.id] = obj
      return acc
    }, {})

  let weightedReturnsPercent = []
  let weightedReturnsNet = []
  const sellTrades = newTrades.filter((trade) => !trade.type)

  sellTrades.map((sellTrade) => {

    // Finding weight & returns
    const closedWeight = sellTrade.qty / closedShares
    const net_r = (sellTrade.price - buyTrades[sellTrade.close_id].price) * sellTrade.qty
    const r =
      (sellTrade.price - buyTrades[sellTrade.close_id].price) / buyTrades[sellTrade.close_id].price
    weightedReturnsNet.push(net_r)
    weightedReturnsPercent.push(closedWeight * r)

    // Minus trade qty for calculating avgUnrealizedCostBasis; Warning: this changes buyTrades
    // array
    buyTrades[sellTrade.close_id].qty -= sellTrade.qty

    return null
  })
  buyTrades = Object.values(buyTrades) // O(N)

  const unrealizedCostBasis = buyTrades.reduce((acc, curr) => {
    acc += curr.qty * Number(curr.price)
    return acc
  }, 0)

  const avgUnrealizedCostBasis = unrealizedCostBasis / openShares

  // For firstHeld
  newTrades.sort((a, b) => {
    let da = new Date(a.date),
      db = new Date(b.date)
    return da - db
  })

  return {
    ticker: newTrades[0].ticker,
    name: newTrades[0].name,
    currency: newTrades[0].currency,
    openShares,
    avgCostBasis: Number((totalCost / totalShares).toFixed(2)),
    mktPrice,
    unrealizedReturns: Number(
      ((mktPrice - avgUnrealizedCostBasis) / avgUnrealizedCostBasis).toFixed(2),
    ),
    purchaseValue: unrealizedCostBasis,
    currentValue: mktPrice * openShares,
    firstHeld: newTrades[0].date,
    returns_percent: Number(weightedReturnsPercent.reduce((a, b) => a + b, 0).toFixed(2)),
    returns_net: weightedReturnsNet.reduce((a, b) => a + b, 0),
  }
}

export { process }
