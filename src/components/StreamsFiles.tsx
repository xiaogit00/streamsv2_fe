import { useQuery, useQueryClient, useMutationState, useMutation } from '@tanstack/react-query'
import { authConfig, getStreams } from '../lib/api'
import logo from '../assets/sound-wave.png'
import deleteLogo from '../assets/delete.png'
import penLogo from '../assets/pen.png'
import { NewTrade } from '../types'
import { toNewTrade } from '../utils/typeguards'
import { useState } from 'react'
import Indicator from './Indicator'
import axios from 'axios'

interface StreamsFilesProps {
  show: boolean
}

const StreamFiles = ({ show }: StreamsFilesProps) => {

  const [isHovering, setIsHovering] = useState<string|null>(null)

  const queryClient = useQueryClient()

  const deleteStreamMutation = useMutation({
    mutationFn: async (streamId: string) => {
      return axios.delete(process.env.REACT_APP_BACKEND_URL + `/api/streams/${streamId}`, authConfig)
    }, 
    onSettled: () => Promise.all([    
      queryClient.invalidateQueries({ queryKey: ['streams']}),
      queryClient.invalidateQueries({ queryKey: ['streamsWithTrades']})
  ]),
    mutationKey: ['deleteStream']
  })
  
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
  if (data) console.log(data)
  return (
    <div
      id='container'
      className='flex flex-col gap-1 text-slate-300 text-sm'
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      {data?.map((stream: any) => {
        return (
          <div 
            className='h-8 p-2 hover:bg-slate-700 cursor-pointer' 
            key={stream.id}
            onMouseOver={() => setIsHovering(stream.id)}
            onMouseOut={() => setIsHovering(null)}
          >
            <div className='pl-6 h-full flex gap-2 items-center'>
              <div className='h-full'>
                <img src={logo} className='max-h-full max-w-full invert' />
              </div>
              <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{stream.stream_name}</div>
              { isHovering === stream.id
              ? (<div className='ml-auto mr-2 flex gap-2'>
                  <img src={penLogo} 
                      className='w-4 invert opacity-50 hover:opacity-100' 
                  />
                  <img 
                    src={deleteLogo} 
                    className='w-4 invert opacity-50 hover:opacity-100' 
                    onClick={() => deleteStreamMutation.mutate(stream.id)}
                  />
                </div>)
              : null}
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default StreamFiles



