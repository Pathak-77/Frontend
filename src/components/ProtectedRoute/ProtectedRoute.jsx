import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isTokenValid } from '../../utils/jwt-helper';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!isTokenValid()){
        navigate("/auth/login")
    }
  },[navigate]);
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute