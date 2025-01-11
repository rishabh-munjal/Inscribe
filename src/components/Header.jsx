import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between font-title m-4'>
      <div className='font-logo text-3xl text-blue-600 font-bold'>Inscribe</div>
      <div className='flex gap-10 font-semibold text-neutral-600' >
        <button>Home</button>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Header
