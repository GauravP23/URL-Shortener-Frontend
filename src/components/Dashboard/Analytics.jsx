import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import Sidebar from './Sidebar'
import { useState } from 'react'

import BarGraph from './Charts/BarGraph';
import DoughnutGraph from './Charts/DoughnutGraph';
import LineGraph from './Charts/LineGraph';



const Analytics = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true)
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
                <div className='flex flex-col space-y-4  w-3/4 mx-auto pt-20 '>
                    <div>
                        <p className='text-3xl font-bold'>Analytics</p>
                    </div>
                    <div className='grid grid-cols-3  gap-4'>
                        <div id="0"><BarGraph /></div>
                        <div id="1"><DoughnutGraph /></div>
                        <div id="2"><LineGraph /></div>







                    </div>



                </div>










            </div>









        </>
    )
}

export default Analytics