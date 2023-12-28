import { useQuery, useQueryClient, useMutationState } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import logo from '../assets/letter.png'
import Indicator from './Indicator'

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
          <div className='h-8 p-2 hover:bg-slate-700 cursor-pointer' key={trade.id}>
            <div className='pl-6 h-full flex gap-2 items-center'>
              <div className='h-full'>
              {/* <span className='text-teal-600'>●</span> */}
              <img src={logo} className='max-h-full max-w-full invert' />
              </div>
              <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{trade.name}</div>
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



