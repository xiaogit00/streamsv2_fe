import { useQuery, useQueryClient, useMutationState, useMutation } from '@tanstack/react-query'
import { authConfig, getTrades } from '../lib/api'
import logo from '../assets/letter.png'
import deleteLogo from '../assets/delete.png'
import penLogo from '../assets/pen.png'
import Indicator from './Indicator'
import { useState } from 'react'
import axios from 'axios'

interface TradesFilesProps {
  show: boolean
}

const TradesFiles = ({ show }: TradesFilesProps) => {
  const queryClient = useQueryClient()

  const deleteTradeMutation = useMutation({
    mutationFn: async (tradeId: string) => {
      return axios.delete(process.env.REACT_APP_BACKEND_URL + `/api/trades/${tradeId}`, authConfig)
    }, 
    onSettled: () => Promise.all([    
      queryClient.invalidateQueries({ queryKey: ['trades']}),
      queryClient.invalidateQueries({ queryKey: ['streamsWithTrades']})
  ]),
    mutationKey: ['deleteTrade']
  })

  const [isHovering, setIsHovering] = useState<string|null>(null)

  
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
          <div className='h-8 p-2 hover:bg-slate-700 cursor-pointer' 
              key={trade.id}
              onMouseOver={() => setIsHovering(trade.id)}
              onMouseOut={() => setIsHovering(null)}
          >
            <div className='pl-6 h-full flex gap-2 items-center'>
              <div className='h-full'>
              {/* <span className='text-teal-600'>●</span> */}
              <img src={logo} className='max-h-full max-w-full invert' />
              </div>
              <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{trade.name}</div>
              { isHovering === trade.id
              ? (<div className='ml-auto mr-2 flex gap-2'>
                  <img src={penLogo} 
                      className='w-4 invert opacity-50 hover:opacity-100' 
                  />
                  <img 
                    src={deleteLogo} 
                    className='w-4 invert opacity-50 hover:opacity-100' 
                    onClick={() => deleteTradeMutation.mutate(trade.id)}
                  />
                </div>)
              : (
                <div className='ml-auto mr-2'>
                  <Indicator trade={trade.type ? 'buy' : 'sell'} />
                </div>
              )}
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default TradesFiles


{/*  */}
