import { useQuery } from '@tanstack/react-query'
import { getStreams } from '../lib/api'
import TableHead from '../components/TableHead'
import TableRow from '../components/TableRow'
import { GroupedStreamTrades, GroupedTrades, ProcessedTrades, StreamTrade } from '../types'
import { process } from '../utils/holdings'

const StreamsPage = () => {
    const { isLoading, isError, data, error } = useQuery({
      queryKey: ['streams'],
      queryFn: getStreams,
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
      <div id='table' className='h-full mt-2'>
        <table className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
          <TableHead />
          <tbody className=''>
            {Object.entries(groupedByStream).map((entries) => {
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
  
  export default StreamsPage