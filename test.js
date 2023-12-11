let trades = require('./json/trades.json')

const w = [1, 2, 3, 80]
console.log(w.reduce((a, b) => a+b, 0))

// let buyTrades = trades.filter(trade => trade.type).reduce((acc, obj) => { // O(N)
//     acc[obj.id] = obj;
//     return acc;
//   }, {})

// trades.filter(trade => !trade.type).map(trade => { // O(N)
//     buyTrades[trade.closeId].qty -= trade.qty
// })

// buyTrades = Object.values(buyTrades) // O(N)

// const {unrealizedShares, unrealizedCostBasis} = buyTrades.reduce((acc, curr) => {
//     acc.unrealizedShares += curr.qty
//     acc.unrealizedCostBasis += curr.qty*Number(curr.price)
//     return acc
// }, {unrealizedShares: 0,unrealizedCostBasis: 0})

// const avgUnrealizedCostBasis = unrealizedCostBasis/unrealizedShares
// console.log(unrealizedCostBasis)