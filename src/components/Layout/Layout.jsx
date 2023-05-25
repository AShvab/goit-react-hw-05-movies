import Navigation from 'components/Navigation/Navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />    
    </>
  )
}

export default Layout
