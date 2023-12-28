import Header from '../components/Header'
import Filters from '../components/Filters'
import { useState } from 'react'
import { ActiveTab } from '../types'
import Tabs from '../components/Tabs'
import HoldingsPage from './HoldingsPage'
import StreamsPage from './StreamsPage'

const Workspace = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Holdings)
  
  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      <Header activeTab={activeTab}/>

      <Filters />
      <HoldingsPage activeTab={activeTab}/>
      <StreamsPage activeTab={activeTab}/>
    </>
  )
}

export default Workspace
