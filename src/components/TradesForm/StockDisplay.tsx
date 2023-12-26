import { SelectedStock } from "../../types"
import StockPrice from "./StockPrice"

interface StockDisplayProps {
    selectedStock: SelectedStock | null,
    stockPrice: string | null,
    setStockPrice: React.Dispatch<string>,
    isTradeActive: boolean,
    setIsTradeActive: React.Dispatch<boolean>
  }
  
const StockDisplay = ({ selectedStock, stockPrice, setStockPrice, isTradeActive, setIsTradeActive }: StockDisplayProps) => {
if (!selectedStock) return null
const options = { month: 'short', day: 'numeric', year: 'numeric' } as const
const today = new Date().toLocaleDateString('en-US', options)

return(
    <>
    <div id='streamsTradeSelectorTab' className="flex mt-2 h-6 text-xs">
        <div className={`w-1/2 pl-2 p-1 hover:text-slate-100 cursor-pointer ${isTradeActive ? 'bg-slate-700 text-slate-100' : ''}`} 
            onClick={() => setIsTradeActive(true)}>
                Add Trades
        </div>
        <div className={`w-1/2 pl-2 p-1 hover:text-slate-100 cursor-pointer ${isTradeActive ? '' : 'bg-slate-700 text-slate-100'}`} 
            onClick={() => setIsTradeActive(false)}>
                Add Streams
        </div>
    </div>
    <div id='stockData' className='flex flex-col mb-2 bg-slate-700 p-2'>
        
        <div id='firstRow' className='flex justify-between text-base font-semibold'>
            <div>{selectedStock.symbol}</div>
            <StockPrice 
            ticker={selectedStock.symbol} 
            currency={selectedStock.currency}
            stockPrice={stockPrice}
            setStockPrice={setStockPrice}
            />
        </div>
        <div id='secondRow' className='flex justify-between text-xs'>
            <div className='w-40'>{selectedStock.name}</div>
            <div>on {today}</div>
        </div>
        <div id='thirdRow' className='text-xs mb-1'>
            <div className='italic'>Exchange: {selectedStock.stockExchange} ({selectedStock.exchangeShortName})</div>
        </div>
    </div>
    </>
    
    )
}

export default StockDisplay