import Header from '../components/Header'
import Filters from '../components/Filters'
import Table from '../components/Table'
import { useState } from 'react'
import { ActiveTab } from '../types'
import Tabs from '../components/Tabs'
import ActivePage from './ActivePage'

const Workspace = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Holdings)
  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      <Header activeTab={activeTab}/>

      <Filters />

      <ActivePage activeTab={activeTab}/>
    </>
  )
}

export default Workspace
