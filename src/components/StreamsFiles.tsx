import { useQuery, useQueryClient, useMutationState } from '@tanstack/react-query'
import { getStreams } from '../lib/api'
import logo from '../assets/sound-wave.png'
import { NewTrade } from '../types'
import { toNewTrade } from '../utils/typeguards'
import { useState } from 'react'
import Indicator from './Indicator'

interface StreamsFilesProps {
  show: boolean
}

const StreamFiles = ({ show }: StreamsFilesProps) => {
  
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
          <div className='h-8 p-2 hover:bg-slate-700 cursor-pointer' key={stream.id}>
            <div className='pl-6 h-full flex gap-2 items-center'>
              <div className='h-full'>
                <img src={logo} className='max-h-full max-w-full invert' />
              </div>
              <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{stream.stream_name}</div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default StreamFiles



