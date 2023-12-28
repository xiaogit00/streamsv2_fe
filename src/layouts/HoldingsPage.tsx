import { useQuery } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import TableHead from '../components/TableHead'
import { ActiveTab, GroupedTrades, ProcessedTrades } from '../types'
import { process } from '../utils/holdings'
import TableRowHoldings from '../components/TableRowHoldings'

const HoldingsPage = ({ activeTab }: {activeTab: ActiveTab}) => {
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
    <div id='table' className={`h-full overflow-x-auto mt-2 ${activeTab === ActiveTab.Holdings ? '' : 'hidden'}`}>
      <table className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
        <TableHead type={'holdings'}/>
        <tbody className=''>
          {Object.entries(groupedByTicker).map((entries) => {
            const [ticker, trades] = entries
            const processedData: ProcessedTrades = process(trades)
            return(
              <TableRowHoldings key={trades[0].id} processedTrades={processedData} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HoldingsPage
