import React from 'react'
import Navigation from '../../components/Navbar/Navigation'
import Spinner from "../../components/Spinner/Spinner"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ApplicationWrapper = () => {

  const isLoading = useSelector((state) => state?.loaderState.loading);
  return (
    <div>
      <Navigation/>
      <Outlet/>
      { isLoading && < Spinner/> }
    </div>
  )
}

export default ApplicationWrapper
