import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import logo from '../assets/xiaomi.png'

interface TradesFilesProps {
  show: boolean
}

const TradesFiles = ({ show }: TradesFilesProps) => {
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
  return (
    <div
      id='container'
      className='flex flex-col gap-1 text-slate-300 text-sm'
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      {data?.map((trade: any) => {
        return (
          <div className='h-8 p-2 hover:bg-slate-700 cursor-pointer' key='trade.id'>
            <div className='pl-6 h-full flex gap-2 items-center'>
              <div className='h-full'>
                <img src={logo} className='max-h-full max-w-full' />
              </div>
              <div>{trade.name}</div>
              <div className='ml-auto mr-2'>
                <Indicator trade={trade.type ? 'buy' : 'sell'} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TradesFiles

interface IndicatorProps {
  trade: string
}
const Indicator = ({ trade }: IndicatorProps) => {
  return (
    <div className='text-slate-400 bg-teal-950 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-3xl text-xs px-2 text-center inline-flex items-center'>
      {trade}
    </div>
  )
}
