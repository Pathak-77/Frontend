import React from 'react'
import Navigation from '../../components/Navbar/Navigation'
import { Outlet } from 'react-router-dom'

const ApplicationWrapper = () => {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default ApplicationWrapper
