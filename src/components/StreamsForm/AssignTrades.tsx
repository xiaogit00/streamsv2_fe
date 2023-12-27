import { useQuery } from "@tanstack/react-query"
import { Field } from "formik"
import { getTrades } from "../../lib/api"
import { SelectedStock, Trade } from "../../types"
import { formatDate } from "../../utils/formatDate"

const AssignTradesLabel = () => {
    return(
        <div id='row2Labels' className='flex text-xs font-bold'>
            <label htmlFor='assignTrades' className='w-44'>
            Assign Trades
            </label>
        </div>
    )
}
interface AssignTradesProps {
  selectedStock: SelectedStock | null
}

const AssignTrades = ({ selectedStock }: AssignTradesProps) => {
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
  let filteredTrades: Trade[] = []
  if (data && selectedStock) {
    filteredTrades = data.filter(trade => trade.ticker === selectedStock.symbol)
  }
  return(
      <div id='sellingFrom' className='h-48 bg-slate-900 overflow-y-auto scrollbar rounded-md border border-slate-700 flex flex-col text-[0.7em]'>
        {filteredTrades.length > 0 
        ? filteredTrades.map(trade => {
          return(
            <label key={trade.id}>
              <div 
                key={trade.id} 
                className={`px-2 p-1 pr-1 h-10 flex justify-between items-center hover:bg-slate-700 cursor-pointer`}
              >
                <Field type="checkbox" name="trades" value={trade.id} />
                <div id='streamNamePrice' className='flex flex-col items-start px-2 w-16 whitespace-nowrap overflow-hidden text-ellipsis'>
                  <div className='text-sm font-semibold'>{trade.ticker}</div>
                  <div className=''>${Number(trade.price).toFixed(2)}</div>
                </div>
                <div className='font-semibold'> {formatDate(trade.date)}</div>
                <div className='font-semibold'> {trade.qty} shares</div>
                <IndicatorSmall trade={trade.type ? 'Buy': 'Sell'} />
              </div>
            </label>
          )
        })
        : null
        }
        
      </div>
  )
}

export {
    AssignTradesLabel,
    AssignTrades
}

interface IndicatorProps {
    trade: string
  }
  
  
  const IndicatorSmall = ({ trade }: IndicatorProps) => {
    return (
      <div className='text-slate-400 border-2 border-slate-100 border-opacity-10 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-3xl text-[0.8em] px-2 text-center inline-flex items-center'>
        {trade}
      </div>
    )
  }