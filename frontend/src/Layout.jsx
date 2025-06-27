import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import MainBanner from './components/MainBanner/MainBanner'

function Layout() {
  return (
    <>
     <div className="flex flex-col min-h-screen">
    <Header/>
  
    <main className="flex-1">
    <Outlet/>
    </main>
    <Footer/>
</div>
    </>
  )
}

export default Layout