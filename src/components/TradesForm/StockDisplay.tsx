import { useContext } from "react"
import { SelectedStock } from "../../types"
import StockPrice from "./StockPrice"

interface StockDisplayProps {
    selectedStock: SelectedStock | null,
    stockPrice: string | null,
    setStockPrice: React.Dispatch<string>
  }
  
const StockDisplay = ({ selectedStock, stockPrice, setStockPrice}: StockDisplayProps) => {
if (!selectedStock) return null
const options = { month: 'short', day: 'numeric', year: 'numeric' } as const
const today = new Date().toLocaleDateString('en-US', options)

return(
    <>
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