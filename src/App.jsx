import React from 'react';
import { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { login , logout} from './features/authSlice';
import authService from './appwrite/auth';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


function App() {

  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between m-0'>
      <div className='w-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
