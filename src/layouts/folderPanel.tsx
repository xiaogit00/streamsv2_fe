import { useState } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import TradesFiles from '../components/TradesFiles'
import NewForm from '../components/NewForm'

const FolderPanel = (): React.JSX.Element => {
  const [showStreams, setShowStreams] = useState<boolean>(false)
  const [showTrades, setShowTrades] = useState<boolean>(false)

  return (
    <div className='flex flex-col h-full'>
      <div id='header' className='h-12 p-3 pl-3 text-slate-400'>
        INVESTMENTS
      </div>
      <div
        id='streams'
        className='h-8 bg-slate-700 p-2 pl-3 text-xs font-bold text-slate-400 flex gap-2 items-center cursor-pointer'
        onClick={() => setShowStreams(!showStreams)}
      >
        {showStreams ? <DownOutlined /> : <RightOutlined />}
        <p>STREAMS</p>
      </div>

      {showStreams ? <div id='streamsFiles' className='h-24'></div> : null}

      <div
        id='trades'
        className='h-8 bg-slate-700 p-2 pl-3 text-xs font-bold text-slate-400 flex gap-2 items-center cursor-pointer'
        onClick={() => setShowTrades(!showTrades)}
      >
        {showTrades ? <DownOutlined /> : <RightOutlined />}
        <p>TRADES</p>
      </div>

      <TradesFiles show={showTrades} />
      <NewForm />
    </div>
  )
}

export default FolderPanel
