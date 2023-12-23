interface TradeTypeProps {
    tradeType: boolean,
    setTradeType: React.Dispatch<React.SetStateAction<boolean>>
  }

const TradeTypeButtons = ({ tradeType, setTradeType }: TradeTypeProps) => {
  
    return(
      <div id='typeButtons' className='flex items-center text-xs gap-2 '>
        <div
          id='activeButton'
          className={`w-12 h-6 p-1 text-center flex flex-col justify-center cursor-pointer rounded-2xl ${tradeType ? 'bg-[#A1E66E] text-slate-900 hover:text-slate-700': 'bg-slate-700 border-slate-400 border hover:text-slate-50'}`}
          onClick={() => setTradeType(true)}
        >
          <span>Buy</span>
        </div>
        <div
          id='allButton'
          className={`w-12 h-6 p-1 text-center flex flex-col justify-center cursor-pointer rounded-2xl  ${tradeType ? 'bg-slate-700 border-slate-400 border hover:text-slate-50': 'bg-[#A1E66E] text-slate-900 hover:text-slate-700'}`}
          onClick={() => setTradeType(false)}
        >
          <span>Sell</span>
        </div>
      </div>
    )
  }

export default TradeTypeButtons