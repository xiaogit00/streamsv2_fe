import _ from 'lodash'
import { Trade, ProcessedTrades, BuyTradesById } from '../types'

// This is the core engine that turns an array of trades into intelligible holdings.


const process = (trades: Trade[]): ProcessedTrades => {
  // For fields: qty, avgCostBasis
  const newTrades = _.cloneDeep(trades)
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
  const avgCostBasis = Number((totalCost / totalShares).toFixed(2))

  // For firstHeld
  newTrades.sort((a, b) => {
    const da = new Date(a.date),
      db = new Date(b.date)
    return da.valueOf() - db.valueOf()
  })

  // Declaration for mutation in sellTrades.map
  const openBuyTradesDict: BuyTradesById = newTrades // Can mutate; 
    .filter((trade) => trade.type)
    .reduce((acc: BuyTradesById, obj) => {
      acc[obj.id] = obj
      return acc
    }, {})
    
  // For unrealizedCostBasis, purchaseValue, and currentValue
  const weightedReturnsPercent: number[] = []
  const weightedReturnsNet: number[] = []
  const sellTrades = newTrades.filter((trade) => !trade.type)

  sellTrades.map((sellTrade) => {
    if (!sellTrade.close_id) return null // Skip calculations altogether in edge case that close_id is not defined for sell trade
                                         // Warning: if undefined, the calcs for purchaseValue (unrealizedCostBasis), unrealizedReturns, currentValue, will all be inaccurate
    // Finding weight & returns
    const closedWeight = sellTrade.qty / closedShares   // Proportion of this particular sell trade wrt total sold
    const net_r = (sellTrade.price - openBuyTradesDict[sellTrade.close_id].price) * sellTrade.qty   // Amt p/l for this particular sell trade
    const r =
      (sellTrade.price - openBuyTradesDict[sellTrade.close_id].price) / openBuyTradesDict[sellTrade.close_id].price // P/L in percent
      // ^ Here, we *require* the buyTrade ID to calculate the individual returns for this trade. 
    weightedReturnsNet.push(net_r)
    weightedReturnsPercent.push(closedWeight * r)

    // Minus trade qty for calculating avgUnrealizedCostBasis; Warning: this changes buyTrades
    // array
    openBuyTradesDict[sellTrade.close_id].qty -= sellTrade.qty

    return null
  })
  const openBuyTradesArray = Object.values(openBuyTradesDict) // O(N)

  const unrealizedCostBasis = openBuyTradesArray.reduce((acc, curr) => {
    acc += curr.qty * Number(curr.price)
    return acc
  }, 0)

  return {
    ticker: newTrades[0].ticker,
    name: newTrades[0].name,
    currency: newTrades[0].currency,
    openShares,
    avgCostBasis,
    purchaseValue: unrealizedCostBasis,
    firstHeld: newTrades[0].date,
    returns_percent: Number(weightedReturnsPercent.reduce((a, b) => a + b, 0).toFixed(2)),
    returns_net: weightedReturnsNet.reduce((a, b) => a + b, 0),
  }
}


export { process }
