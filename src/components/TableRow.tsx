import { process } from '../utils/holdings'
import { Trade } from '../types'

interface TradeRowProps { 
  data: Trade[] | undefined; 
}
const TableRow = ({ data }: TradeRowProps) => {
    const processedData = process(data)
    const {
      name,
      ticker,
      openShares,
      avgCostBasis,
      mktPrice,
      unrealizedReturns,
      purchaseValue,
      currentValue,
      firstHeld,
      returns_percent,
      returns_net,
    } = processedData
  
    const firstHeldTime = new Date(firstHeld)
    const firstHeldDatetime = firstHeldTime.getTime()
    const now = Date.now()
    const diffTime = Math.abs(now - firstHeldDatetime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffYears = Math.floor(diffDays / 365)
    const remainingMonths = Math.floor((diffDays % 365) / 30)
    return (
      <tr className='text-slate-400'>
        <td className='px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap'>1</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{ticker}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{name}</td>
        <td className='px-4 py-4 text-sm whitespace-nowrap'>{openShares}</td>
        <td className='tableRow'>HK${avgCostBasis / 100}</td>
        <td className='tableRow'>HK${mktPrice}</td>
        <td className='tableRow'>{unrealizedReturns * 100}%</td>
        <td className='tableRow'>HK${purchaseValue / 100}</td>
        <td className='tableRow'>HK${currentValue / 100}</td>
        <td className='tableRow'>{`${diffYears} yrs ${remainingMonths} mo`}</td>
        <td className='tableRow'>{returns_percent * 100}%</td>
      </tr>
    )
  }

export default TableRow