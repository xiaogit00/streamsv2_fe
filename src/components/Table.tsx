import { useQuery } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import TableHead from './TableHead'
import TableRow from './TableRow'
import { GroupedTrades, ProcessedTrades } from '../types'
import { process } from '../utils/holdings'

const Table = () => {
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
  if (!data) return null

  const groupedByTicker = data.reduce<GroupedTrades>((acc, obj) => {
    const { ticker } = obj;
    if (!acc[ticker]) {
      acc[ticker] = []
    }
    acc[ticker].push(obj)
    return acc;
  }, {})
  
  return (
    <div id='table' className='h-full mt-2'>
      <table className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
        <TableHead />
        <tbody className=''>
          {Object.entries(groupedByTicker).map((entries) => {
            const [ticker, trades] = entries
            const processedData: ProcessedTrades = process(trades)
            return(
              <TableRow key={trades[0].id} processedTrades={processedData} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
