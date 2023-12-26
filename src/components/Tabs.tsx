import { ActiveTab } from "../types"

interface ActiveTabProps {
    activeTab: ActiveTab,
    setActiveTab: React.Dispatch<ActiveTab>
}
const Tabs = ({ activeTab, setActiveTab }: ActiveTabProps) => {
    return(
        <div className='h-8 flex bg-slate-700 text-sm font-semibold text-slate-400 }'>
            <div className={`w-32 p-1 text-center hover:text-slate-100 cursor-pointer ${activeTab === ActiveTab.Holdings ? 'bg-slate-900 text-slate-100' : ''}`}
                onClick={() => setActiveTab(ActiveTab.Holdings)}
            >
                Holdings
            </div>
            <div className={`w-32 p-1 text-center hover:text-slate-100 cursor-pointer ${activeTab === ActiveTab.Streams ? 'bg-slate-900 text-slate-100' : ''}`}
                onClick={() => setActiveTab(ActiveTab.Streams)}
            >
                Streams
            </div>
            <div className={`w-32 p-1 text-center hover:text-slate-100 cursor-pointer ${activeTab === ActiveTab.Trades ? 'bg-slate-900 text-slate-100' : ''}`}
                onClick={() => setActiveTab(ActiveTab.Trades)}
            >
                Trades
            </div>
        </div>
    )
}

export default Tabs