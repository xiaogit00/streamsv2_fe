interface IndicatorProps {
    trade: string
  }

const Indicator = ({ trade }: IndicatorProps) => {
    return (
      <div className='text-slate-400 border-2 border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-3xl text-xs px-2 text-center inline-flex items-center'>
        {trade}
      </div>
    )
  }

export default Indicator