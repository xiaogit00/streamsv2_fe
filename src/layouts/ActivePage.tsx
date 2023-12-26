import { ActiveTab } from "../types"
import HoldingsPage from "./HoldingsPage"
import StreamsPage from "./StreamsPage"

interface ActivePageProps {
    activeTab: ActiveTab
}

const ActivePage = ({ activeTab }: ActivePageProps) => {
    if (activeTab === ActiveTab.Holdings) return <HoldingsPage />
    if (activeTab === ActiveTab.Streams) return <StreamsPage />
    // if (activeTab === ActiveTab.Trades) return <TradesPage />
    return null
}

export default ActivePage