import { process } from '../utils/holdings'
import { Trade } from '../types'
import { useEffect, useState } from 'react';
import { getStockPrice } from '../services/pricing';
import Spinner from './Spinner';

interface TradeRowProps { 
  trades: Trade[] | undefined; 
}
const TableRow = ({ trades }: TradeRowProps) => {
    if (!trades || trades.length === 0) return (<></>)

    const [loading, setLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [stockPrice, setStockPrice] = useState<number | null>(null)
    
    useEffect(() => {
      setLoading(true)
      getStockPrice(ticker)
        .then((res: any) => {
          if (res.data.length > 0) {
            setIsError(false)
            setStockPrice(Number(res.data[0].price))
          } else {
            setIsError(true)
          }
          setLoading(false)
        })
    }, [])

    const processedData = process(trades, stockPrice)
    const {
      name,
      ticker,
      currency,
      openShares,
      avgCostBasis,
      mktPrice,
      unrealizedReturns,
      purchaseValue,
      currentValue,
      firstHeld,
      returns_percent,
      returns_net,
    } = processedData
  
    const firstHeldTime = new Date(firstHeld)
    const firstHeldDatetime = firstHeldTime.getTime()
    const now = Date.now()
    const diffTime = Math.abs(now - firstHeldDatetime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffYears = Math.floor(diffDays / 365)
    const remainingMonths = Math.floor((diffDays % 365) / 30)
    return (
      <tr className='text-slate-400'>
        <td className='px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap'>0</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{ticker}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{name}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{openShares}</td>
        <td className='tableRow'>{currency}${avgCostBasis}</td>
        <td className='tableRow'>{currency}${mktPrice ? mktPrice : Spinner}</td>
        <td className='tableRow'>{unrealizedReturns * 100}%</td>
        <td className='tableRow'>{currency}${purchaseValue}</td>
        <td className='tableRow'>{currency}${currentValue}</td>
        <td className='tableRow'>{`${diffYears} yrs ${remainingMonths} mo`}</td>
        <td className='tableRow'>{returns_percent * 100}%</td>
      </tr>
    )
  }

export default TableRow