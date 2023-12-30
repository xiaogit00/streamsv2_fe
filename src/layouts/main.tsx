import { useEffect, useState } from 'react'
import { SearchOutlined, FileOutlined, SettingOutlined } from '@ant-design/icons'
import FolderPanel from './FolderPanel'
import owl from '../assets/owl.png'
import Workspace from './Workspace'
import { ActiveTab } from '../types'
import { fetchGuestToken } from '../services/fetchGuestToken'


const Main = (): React.JSX.Element => {

  const [showPanel, setShowPanel] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Holdings)
  
  const toggleFolderPanel = () => {
    setShowPanel(!showPanel)
  }
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  useEffect(() => {
    if (!token) {
      fetchGuestToken().then(res => {
        localStorage.setItem('token', res)
        setToken(res)
      })
    }
  }, [])

  return (
    <div id='container' className='flex min-h-screen'>
      <div id='firstSidebar' className='min-w-[3.5em] bg-slate-700 top-0 bottom-0 hidden lg:block'>
        <div className='flex flex-col gap-8 mt-1 justify-center h-screen'>
          <div className='pl-3 pr-3 pt-2'>
            <img
              className='w-8'
              src='https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png'
            />
          </div>
          <FileOutlined
            onClick={toggleFolderPanel}
            className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90'
          />
          <SearchOutlined className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90' />
          <SettingOutlined 
            className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90 cursor-pointer' 
          />
          <div className='mt-auto p-2 relative'>
            <img title="Logged in as guest" src={owl} className='mb-4 w-10 invert opacity-80' />
          </div>
        </div>
      </div>

      <div id='rightPane' className='w-full flex flex-col min-h-screen'>
        <div id='header' className='h-12 bg-slate-700'></div>
        <div className='flex h-full'>
          {showPanel ? (
            <div id='filePanel' className='bg-slate-800 w-72 hidden h-full lg:block'>
              <FolderPanel setActiveTab={setActiveTab}/>
            </div>
          ) : null}

          <div id='mainContent' className='bg-slate-900 grow overflow-x-scroll'>
            <Workspace activeTab={activeTab} setActiveTab={setActiveTab}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
