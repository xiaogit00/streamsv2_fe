import { process } from './holdings.js'
const trades = require('../json/trades.json')
const trades2 = require('../json/trades2.json')

test.only('Correct values for Xiaomi Trades', () => {
    const res = process(trades)
    console.log(res)
    expect(res.openShares).toBe(150)
    expect(res.avgCostBasis).toBe(1358)
    expect(res.unrealizedReturns).toBe(0.15)
    expect(res.purchaseValue).toBe(195800)
    expect(res.currentValue).toBe(225000)
    expect(res.returns_percent).toBe(0.12)
    expect(res.returns_net).toBe(9200)
})



test('Correct values for Oran Trades', () => {
    const res = process(trades2)
    console.log(res)
    expect(res.openShares).toBe(220)
    expect(res.avgCostBasis).toBe(425)
    expect(res.mktPrice).toBe(6.5)
    expect(res.unrealizedReturns).toBe(0.43)
    expect(res.purchaseValue).toBe(100000)
    expect(res.currentValue).toBe(143000)
    expect(res.returns_percent).toBe(0.22)
    expect(res.returns_net).toBe(13000)

})
// TEST CASE 2 calculations
// openShares = 220
// totalCost = 50000+60000+60000 = 170000
// totalShares = 400
// avgCostBasis = 170000/400 = 425
// mktPrice = 650
// unrealizedCostBasis = 20*500+ 100*300+ 60000 = 100000
// avgUnrealizedCostBasis = unrealizedCostBasis / openShares = 1000/220 = 454/share
// unrealizedReturns = (650-454)/454 = 0.43
// purchaseValue = 100000
// currentValue = 6500*220 = 1430000
// closedShares = 400-220 = 180
// returns_percent = (20/180)*((600-500)/500) + (20/180)*((550-500)/500) + (40/180)*((500-500)/500) + (100/180)*((400-600)/400) = -0.24
// returns_net = (600-500)*20 + (550-500)*20 + (500-500)*40 + (400-600)*100 = -17000