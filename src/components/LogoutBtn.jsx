import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../features/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() =>{
            dispatch(logout())
        })

    }
  return (
    <button className='bg-indigo-600' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
