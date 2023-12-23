import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getTrades } from '../../lib/api'
import { Trade, SelectedStock, BuyTradesById } from '../../types'
import { getOpenBuyTrades } from '../../utils/getOpenBuyTrades'
import { formatDate } from '../../utils/formatDate'
import { useState } from 'react'

const SellingFromLabel = () => {
    return(
      <div id='row4Labels' className='flex text-xs font-bold'>
        <label htmlFor='closeId' className='w-44'>
          Selling From
        </label>
      </div>
    )
  }
interface SellingFromProps {
  selectedStock: SelectedStock | null,
  setmatchingBuyTradeId: React.Dispatch<string | null>,
  matchingBuyTradeRequired: boolean,
  setmatchingBuyTradeRequired: React.Dispatch<boolean>
}

const SellingFrom = ({ selectedStock, setmatchingBuyTradeId, matchingBuyTradeRequired, setmatchingBuyTradeRequired }: SellingFromProps) => {
  const [active, setActive] = useState<number |null>(null)

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['trades'],
    queryFn: getTrades,
  })
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  let openBuyTrades: Trade[] = []

  if (data && selectedStock) {
    const filteredTrades = data.filter(trade => trade.ticker === selectedStock.symbol)
    openBuyTrades = getOpenBuyTrades(filteredTrades) // Get all the buy trades after deducting sell trade qtys
    console.log(openBuyTrades)
  }

  const handleActiveSelection = (tradeId: string, id: number) => {
    if (active === id) {
      setmatchingBuyTradeId(null)
      setActive(null);
    
    } else {
      setmatchingBuyTradeId(tradeId)
      setmatchingBuyTradeRequired(false)
      setActive(id);
    }
  }
  
  return(
    <>
      <div id='sellingFrom' className='h-24 bg-slate-900 overflow-y-auto scrollbar rounded-md border border-slate-700 flex flex-col text-[0.7em]'>
      {selectedStock && openBuyTrades.length > 0 ? openBuyTrades.map((trade, id) => {
        return(
          <div 
            key={id} 
            className={`px-2 p-1 h-6 flex justify-between items-center hover:bg-slate-700 cursor-pointer ${active === id ? 'bg-slate-700 text-slate-50' : null}`}
            onClick={() => handleActiveSelection(trade.id, id)}
          >
            <span>{trade.ticker}</span>
            <span>{trade.currency}${Number(trade.price).toFixed(2)}</span>
            <span>{formatDate(trade.date)}</span>
            <span>{trade.qty} shares</span>
          </div>
          )
      })
        : selectedStock ? (<div className='p-2 italic'>You do not have assets of the following stocks to sell: {selectedStock?.symbol}.</div>)
        : null
      }
    </div>
    {matchingBuyTradeRequired ? 
    <div className='errorMessage'>*Required</div>
    : null}
    </>
  )
}

export {
    SellingFromLabel,
    SellingFrom
}