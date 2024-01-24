import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { SelectedStock } from "../types"
import { ShepherdTourContext } from "react-shepherd"

interface StockSelectorProps {
  setSelectedStock: React.Dispatch<SelectedStock | null>
  inputRequired: boolean,
  setInputRequired: React.Dispatch<boolean>
}

const StockSelector = ({ setSelectedStock, inputRequired, setInputRequired }: StockSelectorProps) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [debouncedInput, setDebouncedInput] = useState<string>('')
    const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<any | null>(null)
    const tour = useContext(ShepherdTourContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') setSelectedStock(null)
      setInputValue(e.target.value)
    }
    
    const handleSelectStock = (item: SelectedStock) => {
      const currentStep = tour?.getCurrentStep()
      if (currentStep?.id === 'slide2' || currentStep?.id === 'slide7') {
        tour?.next()
      }
      setSelectedStock(item)
      setInputRequired(false)
      setInputValue('')
    }
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedInput(inputValue)
      }, 500)
      return () => clearTimeout(timeoutId)
    }, [inputValue, 500])
    
    useEffect(() => {
      if (debouncedInput !== '') {
        axios.get(`https://financialmodelingprep.com/api/v3/search?query=${debouncedInput}&apikey=${process.env.REACT_APP_FMP_APIKEY}`)
          .then((res:any) => {
            setShowSearchDropdown(true)
            const currentStep = tour?.getCurrentStep()
            if (currentStep?.id === 'slide2' || currentStep?.id === 'slide7') {
              tour?.hide()
            }
            
            setSearchResults(res.data)
          })
          .catch((err: any) => {
            console.log("Error fetching tickers:\n",err.message)
          })
      }
    }, [debouncedInput])
  
    return(
      <div className='mx-2 relative'>
        <input
          id='tickerSearch'
          placeholder='*Enter asset name/ticker'
          className='bg-slate-700 w-full outline-none text-sm p-1 stock-selector'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => setShowSearchDropdown(false)}
          onFocus={() => setShowSearchDropdown(true)}
          autoComplete='off'
        />

        {inputRequired 
        ? 
          <div className="text-xs text-red-400">Please select stock.</div> 
        : null
        }

        {showSearchDropdown && searchResults && (
          <div id='searchResultsDropdown' className='p-1 absolute bg-slate-700 w-full h-52 overflow-y-auto scrollbar'>
            {searchResults.map((item: any) => {
              return(
                <div id='searchRowContainer' onMouseDown={() => handleSelectStock(item)} key={item.symbol} className='p-1 flex justify-between items-center cursor-pointer hover:bg-slate-500 '>
                  <div id='left' className='flex flex-col'>
                    <div className='text-sm font-semibold'>{item.symbol}</div>
                    <div className='w-44 text-xs whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</div>
                  </div>
                  <div className='text-sm font-semibold'>{item.exchangeShortName}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
  

export default StockSelector