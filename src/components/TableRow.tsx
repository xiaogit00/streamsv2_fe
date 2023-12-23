import { Trade, ProcessedTrades } from '../types'
import { useEffect, useState } from 'react';
import { getStockPrice } from '../services/pricing';
import Spinner from './Spinner';

const TableRow = ({ processedTrades }: {processedTrades: ProcessedTrades}) => {

    const [isError, setIsError] = useState<boolean>(false)
    const [stockPrice, setStockPrice] = useState<number | null>(null)
    const [currentValue, setCurrentValue] = useState<number | null>(null)
    const [unrealizedReturns, setUnrealizedReturns] = useState<number | null>(null)

    
    useEffect(() => {
      getStockPrice(processedTrades.ticker)
        .then((res: any) => {
          if (res.data.length > 0) {
            const currPrice = Number(res.data[0].price)
            setIsError(false)
            setStockPrice(currPrice)
            
            const avgUnrealizedCostBasis = processedTrades.openShares === 0 ? 0 : processedTrades.purchaseValue / processedTrades.openShares
            const unrealizedReturns = avgUnrealizedCostBasis === 0 ? 0 : Number(((currPrice - avgUnrealizedCostBasis) / avgUnrealizedCostBasis).toFixed(2))
            setUnrealizedReturns(unrealizedReturns)
            setCurrentValue(currPrice * processedTrades.openShares)
            
          } else {
            setIsError(true)
          }
        })
    }, [])

    
    const firstHeldTime = new Date(processedTrades.firstHeld)
    const firstHeldDatetime = firstHeldTime.getTime()
    const now = Date.now()
    const diffTime = Math.abs(now - firstHeldDatetime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffYears = Math.floor(diffDays / 365)
    const remainingMonths = Math.floor((diffDays % 365) / 30)
    return (
      <tr className='text-slate-400'>
        <td className='px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap'>0</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{processedTrades.ticker}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{processedTrades.name}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{processedTrades.openShares}</td>
        <td className='tableRow'>{processedTrades.currency}${processedTrades.avgCostBasis}</td>
        <td className='tableRow'>{processedTrades.currency}${isError ? 'error' : stockPrice ? stockPrice : <Spinner />}</td>
        <td className='tableRow'>{isError ? 'error' : unrealizedReturns !== null  ? unrealizedReturns * 100 : <Spinner />}%</td>
        <td className='tableRow'>{processedTrades.currency}${isError ? 'error' : processedTrades.purchaseValue}</td>
        <td className='tableRow'>{processedTrades.currency}${isError ? 'error' : currentValue !== null ? currentValue : <Spinner />}</td>
        <td className='tableRow'>{`${diffYears} yrs ${remainingMonths} mo`}</td>
        <td className='tableRow'>{isError ? 'error' : processedTrades.returns_percent !== null ? processedTrades.returns_percent * 100 : <Spinner />}%</td>
      </tr>
    )
  }

export default TableRow