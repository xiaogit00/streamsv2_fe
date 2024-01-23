interface TabsSelectorProps {
    isTradeActive: boolean,
    setIsTradeActive: React.Dispatch<boolean>
}

const TabsSelector = ({ isTradeActive, setIsTradeActive }: TabsSelectorProps) => {
    return(
        <div id='streamsTradeSelectorTab' className="flex mt-2 h-6 text-xs">
            <div className={`w-1/2 pl-2 p-1 hover:text-slate-100 cursor-pointer ${isTradeActive ? 'bg-slate-700 text-slate-100' : 'bg-slate-900'}`} 
                onClick={() => setIsTradeActive(true)}>
                    Add Trades
            </div>
            <div id='streams-tab' className={`w-1/2 pl-2 p-1 hover:text-slate-100 cursor-pointer ${isTradeActive ? 'bg-slate-900' : 'bg-slate-700 text-slate-100'}`} 
                onClick={() => setIsTradeActive(false)}>
                    Add Streams
            </div>
       </div>
    )
}

export default TabsSelector