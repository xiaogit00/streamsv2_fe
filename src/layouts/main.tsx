import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { FileOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useStore } from '../store';
import { SettingOutlined } from '@ant-design/icons';
import FolderPanel from './folderPanel';
import Workspace from './workspace';

const Main = () => {
    const [showPanel, setShowPanel] = useState(true)
    const toggleFolderPanel = () => {
        setShowPanel(!showPanel)
    }
    
    return(
        <div id='container' className="flex min-h-screen overflow-hidden">

            <div id='firstSidebar' className='w-16 bg-slate-700 top-0 bottom-0 hidden lg:block'>
                <div className='flex flex-col gap-8 mt-1 justify-center'>
                <div className='pl-3 pr-3 pt-2'><img className='w-8' src='https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png'/></div>
                    <FileOutlined onClick={toggleFolderPanel} className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90'/>
                    <SearchOutlined className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90'/>
                    <SettingOutlined className='text-3xl text-zinc-100 opacity-30 text-center hover:opacity-90'/>
                </div>
            </div>

            <div id='rightPane' className='w-full flex flex-col min-h-screen'>
                <div id='header' className='h-12 bg-slate-700'></div>
                <div className='flex h-full'>
                        
                    {showPanel 
                    ?   <div id='filePanel' className='bg-slate-800 w-72 hidden h-full lg:block'>
                            <FolderPanel />
                        </div>
                    : null
                    }
                    
                    <div id='mainContent' className='bg-slate-900 grow'>
                        <Workspace />
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Main