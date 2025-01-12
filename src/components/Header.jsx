import React from 'react'
import LogoutBtn from './LogoutBtn'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const naItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      slug: "/register",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <div>

      <Container>
        <nav className=' flex justify-between font-title m-4'>
          <Link to='/' className='font-logo text-3xl text-indigo-600 font-bold'>Inscribe</Link>
          <ul className='flex gap-10 font-semibold text-neutral-600' >
            {/* <button className='hover:underline'>Home</button>
            <button className='hover:underline'>Login</button>
            <button className='hover:underline'>Register</button> */}
            {
              naItems.map((item) => 

                item.active ? (<li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className='hover:underline'>{item.name}</button>
                </li>) : null
              
              )}

              {
                authStatus && (
                  <li><LogoutBtn/></li>
                )
              }
          </ul>

        </nav>

      </Container>
    </div>
  )
}

export default Header
