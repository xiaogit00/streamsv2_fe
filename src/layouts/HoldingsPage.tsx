import { useQuery } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import TableHead from '../components/TableHead'
import { ActiveTab, ColdStreamsCalc, GroupedTrades, ProcessedTrades } from '../types'
import { process } from '../utils/holdings'
import TableRowHoldings from '../components/TableRowHoldings'
import { calculateColdStreams } from '../utils/calculateColdStreams'

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
    <div id='table' className={`h-full mt-2 ${activeTab === ActiveTab.Holdings ? '' : 'hidden'}`}>
      <table id='trade-table' className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
        <colgroup>
          <col span={1} id='first-column'/>
          <col span={1} id='second-column'/>
          <col span={1} id='third-column'/>
          <col span={1} id='fourth-column'/>
          <col span={1} id='fifth-column'/>
          <col span={1} id='sixth-column'/>
          <col span={1} id='seventh-column'/>
          <col span={1} id='eighth-column'/>
          <col span={1} id='ninth-column'/>
          <col span={1} id='tenth-column'/>
          <col span={1} id='eleventh-column'/>
        </colgroup>
        <TableHead type={'holdings'}/>
        <tbody id='trade-body' className=''>
          {Object.entries(groupedByTicker).map((entries) => {
            const [ticker, trades] = entries
            const coldStreamCalcs: ColdStreamsCalc = calculateColdStreams(trades)
            return(
              <TableRowHoldings key={trades[0].id} coldStreamCalcs={coldStreamCalcs} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HoldingsPage
