import React from 'react'
import './layout.css'
import Navbar from '../components/Navbar/Navbar'
import Page from '../components/pages/page'
import BottomBar from '../components/BottomBar/BottomBar'
function Layout() {
  return (
    <div className='w-full flex pt-6 justify-center h-full bg-slate-100'>
        <div className='w-[400px] flex flex-col justify-center overflow-hidden rounded-md relative h-[600px] border '>
            <Navbar/>
            <Page/>
            <BottomBar/>
        </div>
    </div>
  )
}

export default Layout