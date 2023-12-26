import { Field } from "formik"

const AssignTradesLabel = () => {
    return(
        <div id='row2Labels' className='flex text-xs font-bold'>
            <label htmlFor='assignTrades' className='w-44'>
            Assign Trades
            </label>
        </div>
    )
}

const AssignTrades = () => {
    return(
        <div id='sellingFrom' className='h-48 bg-slate-900 overflow-y-auto scrollbar rounded-md border border-slate-700 flex flex-col text-[0.7em]'>
              <label>
                <div 
                  key={123} 
                  className={`px-2 p-1 h-10 flex justify-between items-center hover:bg-slate-700 cursor-pointer`}
                >
                  <Field type="checkbox" name="assignTrades" value="One" />
                  <div id='streamNamePrice' className='flex flex-col items-start px-2'>
                    <div className='text-sm font-semibold'>Xiaomi</div>
                    <div className=''>$18.30</div>
                  </div>
                  <div className='font-semibold'> 16/9/23</div>
                  <div className='font-semibold'> 120 shares</div>
                  <IndicatorSmall trade='Buy' />
                </div>
              </label>
              <label>
                <div 
                  key={123} 
                  className={`px-2 p-1 h-10 flex justify-between items-center hover:bg-slate-700 cursor-pointer`}
                >
                  <Field type="checkbox" name="assignTrades" value="Two" />
                  <div id='streamNamePrice' className='flex flex-col items-start px-2'>
                    <div className='text-sm font-semibold'>Xiaomi</div>
                    <div className=''>$18.30</div>
                  </div>
                  <div className='font-semibold'> 16/9/23</div>
                  <div className='font-semibold'> 120 shares</div>
                  <IndicatorSmall trade='Buy' />
                </div>
              </label>
              <label>
                <div 
                  key={123} 
                  className={`px-2 p-1 h-10 flex justify-between items-center hover:bg-slate-700 cursor-pointer`}
                >
                  <Field type="checkbox" name="assignTrades" value="Three" />
                  <div id='streamNamePrice' className='flex flex-col items-start px-2'>
                    <div className='text-sm font-semibold'>Xiaomi</div>
                    <div className=''>$18.30</div>
                  </div>
                  <div className='font-semibold'> 16/9/23</div>
                  <div className='font-semibold'> 120 shares</div>
                  <IndicatorSmall trade='Buy' />
                </div>
              </label>
            </div>
    )
}

export {
    AssignTradesLabel,
    AssignTrades
}

interface IndicatorProps {
    trade: string
  }
  
  
  const IndicatorSmall = ({ trade }: IndicatorProps) => {
    return (
      <div className='text-slate-400 border-2 border-slate-100 border-opacity-10 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-3xl text-[0.8em] px-2 text-center inline-flex items-center'>
        {trade}
      </div>
    )
  }