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
    <button className='bg-base-600 text-indigo-600 px-1 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
