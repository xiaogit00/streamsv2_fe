import { Trade, ProcessedTrades, HotValue, ColdStreamsCalc } from '../types'
import { useEffect, useState } from 'react';
import { getStockPrice } from '../services/pricing';
import Spinner from './Spinner';
import { getRemainingMonths } from '../utils/formatDate';

const TableRowHoldings = ({ coldStreamCalcs }: {coldStreamCalcs: ColdStreamsCalc}) => {

  const [isError, setIsError] = useState<boolean>(false)
  const [stockPrice, setStockPrice] = useState<number | null>(null)
  const [hotValues, setHotValues] = useState<HotValue | null>(null)

    
  useEffect(() => {
    getStockPrice(coldStreamCalcs.ticker)
      .then((res: any) => {
        if (res.data.length > 0) {
          const currPrice = Number(res.data[0].price)
          setIsError(false)
          setStockPrice(currPrice)
          const avgUnrealizedCostBasis = coldStreamCalcs.qtyOpen === 0 ? 0 : coldStreamCalcs.purchaseValueOpen / coldStreamCalcs.qtyOpen
          setHotValues({
            currentValue: currPrice * coldStreamCalcs.qtyOpen,
            mktPrice: currPrice,
            unrealizedReturns: avgUnrealizedCostBasis === 0 ? 0 : Number(((currPrice - avgUnrealizedCostBasis) / avgUnrealizedCostBasis).toFixed(3))
          })
        } else {
          setIsError(true)
        }
      })
  }, [])

    
  if (isError) {
    return(
      <tr id='trades-table-row' className='text-slate-400'>
        <td className='px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap'>0</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.ticker}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.name}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.qtyOpen}</td>
        <td className='tableRow'>{coldStreamCalcs.currency}${coldStreamCalcs.avgBuyPrice}</td>
        <td className='tableRow'>error</td>
        <td className='tableRow'>error</td>
        <td className='tableRow'>{coldStreamCalcs.currency}{coldStreamCalcs.purchaseValueOpen}</td>
        <td className='tableRow'>error</td>
        <td className='tableRow'>{getRemainingMonths(coldStreamCalcs.firstHeld)}</td>
        <td className='tableRow'>error</td>
      </tr>
    )
  }
  
  return (
    <tr id='trades-table-row' className='text-slate-400'>
      <td className='px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap'>0</td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.ticker}</td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.name}</td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>{coldStreamCalcs.qtyOpen}</td>
      <td id='avg-cost-basis' className='tableRow'>{coldStreamCalcs.currency}${coldStreamCalcs.avgBuyPrice}</td>
      <td className='tableRow'>{coldStreamCalcs.currency}${stockPrice ? stockPrice : <Spinner />}</td>
      <td id='unrealized-returns' className='tableRow'>{hotValues !== null  ? Number(hotValues.unrealizedReturns * 100).toFixed(2) : <Spinner />}%</td>
      <td className='tableRow'>{coldStreamCalcs.currency}${coldStreamCalcs.purchaseValueOpen}</td>
      <td className='tableRow'>{coldStreamCalcs.currency}${hotValues !== null ? hotValues.currentValue : <Spinner />}</td>
      <td className='tableRow'>{getRemainingMonths(coldStreamCalcs.firstHeld)}</td>
      <td id='realized-returns' className='tableRow'>{Number.isNaN(coldStreamCalcs.realizedReturns) ? 'None' : coldStreamCalcs.realizedReturns * 100 + '%'}</td>
    </tr>
  )
  }

export default TableRowHoldings