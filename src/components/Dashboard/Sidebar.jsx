import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div> <div className='relative w-60 border-r-2 h-screen rounded-xl border-white p-2  z-10'  >
            <div className=' border-b-2 h-auto  rounded-xl   '>
                <div className='flex gap-4     items-center'>
                    <img className='h-20 w-20 ' src="/logo.png" alt="" />
                    <strong>BRAND</strong>
                </div>
                <button className='w-full mb-4'>Create New</button>
            </div>
        
            <div>


            </div>
            <div className='rounded-xl  flex flex-col border-b-2  py-4 '>
                <div className='  m-2 rounded-lg' ><Link className='font-bold  ' href=""><i className='fa-solid fa-house text-sm px-4 py-2 '></i>Home</Link></div>
                <div className='  m-2 rounded-lg' ><Link className='font-bold' href=""><i className='fa-solid fa-link text-sm px-4 py-2 '></i>Links</Link></div>
                <div className='  m-2 rounded-lg' ><Link className='font-bold' href=""><i className='fa-solid fa-qrcode text-sm px-4 py-2 '></i>Qr Code</Link></div>
                <div className=' m-2 rounded-lg' ><Link className='font-bold' href=""><i className='fa-solid fa-file-lines text-sm px-4 py-2 '></i>Link in Bio</Link></div>
                <div className='  m-2 rounded-lg' ><Link className='font-bold' href=""><i className='fa-solid fa-chart-simple text-sm px-4 py-2 '></i>Analytics</Link></div>

            </div>
            <div>
                <div className='   m-2 rounded-lg' ><a className='font-bold  ' href=""><i className='fa-solid fa-gear text-sm px-4 py-2 '></i>Setting</a></div>
            </div>
            <div>
                <div className='   m-2 rounded-lg' ><a className='font-bold  ' href=""><i className='fa-solid fa-sign-out text-sm px-4 py-2 '></i>Logout</a></div>
            </div>


        </div></div>
    )
}

export default Sidebar