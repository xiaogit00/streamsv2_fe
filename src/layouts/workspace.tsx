import Header from '../components/Header'
import Filters from '../components/Filters'
import { useState } from 'react'
import { ActiveTab } from '../types'
import Tabs from '../components/Tabs'
import HoldingsPage from './HoldingsPage'
import StreamsPage from './StreamsPage'
import { useQuery } from '@tanstack/react-query'


const Workspace = ({activeTab, setActiveTab }: {activeTab: ActiveTab, setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>}): React.JSX.Element => {
  
  
  return (
    <div id="workspace" className='overflow-x-visible'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      <Header activeTab={activeTab}/>

      <Filters />
      <HoldingsPage activeTab={activeTab}/>
      <StreamsPage activeTab={activeTab}/>
    </div>
  )
}

export default Workspace
