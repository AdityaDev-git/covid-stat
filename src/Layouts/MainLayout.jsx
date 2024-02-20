import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CovidWorld from '../components/CovidWorld'
import CovidCountry from '../components/CovidCountry'

const MainLayout = () => {
  return (
    <div className='flex bg-dark-purple text-gray-200'>
      <Sidebar/>
      <div className='p-7 flex-1 h-screen overflow-y-scroll scroll-smooth'>
        <Header/>
        <div>
          <CovidWorld/>
          <CovidCountry/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout