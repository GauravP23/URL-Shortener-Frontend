import { useState } from 'react'

import DashboardNavbar from './DashboardNavbar'
import Sidebar from './Sidebar'

const Links = () => {

    const [sidebarIsOpen, setSidebarOpen] = useState(false)
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)
    return (
        <>
            <DashboardNavbar />
            <div className='flex'>
                {sidebarIsOpen && (
                    <Sidebar />)}
              
                <div className='w-10 h-10 relative p-8  left-0'>
                    <p onClick={toggleSidebar} className='bg-transparent rounded-full cursor-pointer'><i className='fa-solid fa-bars'></i></p>
                </div>
                <div className='flex flex-col space-y-4  w-2/4 mx-auto pt-20 '>
                    <div className=''><p className='text-3xl font-bold'>Links</p></div>
                    <div className='w-full p-6 border-1  shadow-sm shadow-cyan-500/50 ... flex rounded-2xl'>
                        <div className='w-3/4 space-y-2'>
                            <p className='text-xl'> tag</p>
                            <p className='text-lg font-bold'>https://www.google.com</p>
                            <p className='text-md'>https://www.google.com</p>
                            <p className='text-sm'>Date</p>
                        </div>
                        <div className='w-1/4  flex gap-2 justify-end'>
                            <button className='h-10  text-sm'><i className='fa-solid fa-copy'></i></button>
                            <button className=' h-10 text-sm'><i className='fa-solid fa-edit'></i></button>
                        </div>
                    </div>

                    <div >

                        <button>Create New</button>
                    </div>




                </div>



            </div>
        </>
    )
}
export default Links