import React from 'react'
import Navbar from '../componets/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/footer/Footer'

const RouteLayout = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='py-3 px-5'>
      <Outlet/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default RouteLayout