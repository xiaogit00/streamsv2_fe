import { useQuery } from '@tanstack/react-query'
import { getTrades } from '../lib/api'
import { Trade } from '../types'
import TableHead from './TableHead'
import TableRow from './TableRow'

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

  return (
    <div id='table' className='h-full mt-2'>
      <table className='min-w-full divide-y divide-slate-400 divide-opacity-30'>
        <TableHead />
        <tbody className=''>
          <TableRow data={data} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
