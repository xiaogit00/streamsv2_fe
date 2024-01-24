import { useQuery } from '@tanstack/react-query'
import { getStreamsWithTrades } from '../lib/api'
import TableHead from '../components/TableHead'
import { ActiveTab, ColdStreamsCalc, GroupedStreamTrades, GroupedTrades, ProcessedTrades, StreamTrade } from '../types'
import { calculateColdStreams } from '../utils/calculateColdStreams'
import TableRowStreams from '../components/TableRowStreams'

const StreamsPage = ({ activeTab }: {activeTab: ActiveTab}) => {
    const { isLoading, isError, data, error } = useQuery({
      queryKey: ['streamsWithTrades'],
      queryFn: getStreamsWithTrades,
    })
    if (isLoading) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
    if (!data) return null
    const groupedByStream = data.reduce<GroupedStreamTrades>((acc, obj) => {
      const { stream_id } = obj;
      if (!acc[stream_id]) {
        acc[stream_id] = []
      }
      acc[stream_id].push(obj)
      return acc;
    }, {})
    return (
      <div id='streams-table' className={`h-full mt-2 ${activeTab === ActiveTab.Streams ? '' : 'hidden'}`}>
        <table className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
          <TableHead type={'streams'}/>
          <tbody className=''>
            {Object.entries(groupedByStream).map((entries) => {
              const [ticker, trades] = entries
              const coldStreamCalcs: ColdStreamsCalc = calculateColdStreams(trades)
              console.log("coldStreamCalcs", coldStreamCalcs)
              return(
                <TableRowStreams key={trades[0].id} coldStreamCalcs={coldStreamCalcs} />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default StreamsPage