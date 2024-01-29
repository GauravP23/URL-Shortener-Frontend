import { useState } from 'react'
import DashboardNavbar from './DashboardNavbar'
import Sidebar from './Sidebar'
import React from 'react'



import HomeTable from './HomeTable'
const Home = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true)
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)


    const QuickLinks = () => {
        const items = [
            { key: 0, tagline: 'Make it Short', buttonName: 'Go to Links', imgLink: '/dashboard_links.png' },
            { key: 1, tagline: 'Make it Scannable', buttonName: 'Go to QR Codes', imgLink: '/dashboard_qrcs.png' },
            { key: 2, tagline: 'Make a Page', buttonName: 'Go to Link-in-Bio', imgLink: '/dashboard_lib.png' }
        ];

        return (
            items.map((item) => {
                return (
                    <div key={item.key} className='flex space-x-1'><div className='w-1/2'><img src={item.imgLink} alt="" /> </div><div className='flex flex-col justify-evenly'><p>{item.tagline}</p>
                        <button className='text-sm' >{item.buttonName}</button>
                    </div></div>)
            }
            )
        )
    }
    return (
        <>
            <DashboardNavbar />
            <div className='flex'>
                {sidebarIsOpen && (
                    <Sidebar />)}


                <div className='w-10 h-10 relative p-8  left-0'>
                    <p onClick={toggleSidebar} className='bg-transparent rounded-full cursor-pointer'><i className='fa-solid fa-bars'></i></p>
                </div>

                <div className='flex flex-col mx-auto  mt-28   gap-32  h-screen w-3/4'>

                    <div className='grid relative mx-auto  h-auto '>
                        <p className='-top-16 text-3xl font-bold absolute'>Recent  Links</p>
                        <HomeTable />
                    </div>
                    <div className='grid grid-cols-3 mx-auto w-3/4 text-center p-8 rounded-lg shadow-lg shadow-cyan-500/50 ... '>
                        <QuickLinks />
                    </div>
                </div>
            </div>

        </>)
}

export default Home