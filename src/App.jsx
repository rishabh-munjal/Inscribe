import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login , logout} from './features/authSlice';
import authService from './appwrite/auth';

import Header from './components/Header';
import Footer from './components/Footer';

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
  


  return !loading ?(
    <>
      <Header/>
      <div className='text-blue-600'>Body</div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Footer/>

    </>
  ) : null;
}

export default App
