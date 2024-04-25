import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {

    const { currentUser } = useSelector((state) => state.user);


  return currentUser ? <Outlet></Outlet> : <Navigate to="/sign-in" ></Navigate>
}

export default PrivateRoute