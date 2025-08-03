import {React, useState} from 'react'
import Navigation from '../../components/Navbar/Navbar'
import SidePanel from '../../components/SidePanel/SidePanel'
import Spinner from "../../components/Spinner/Spinner"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ApplicationWrapper = () => {

  const isLoading = useSelector((state) => state?.loaderState.loading);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navigation menuOpen={() => setIsOpen(!isOpen)}/>
      {isOpen && <SidePanel menuOpen={() => setIsOpen(!isOpen)}/>}
      <Outlet/>
      { isLoading && < Spinner/> }
    </div>
  )
}

export default ApplicationWrapper
