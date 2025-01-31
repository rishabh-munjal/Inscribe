import React from 'react'
import {Signup as SignupComponent} from '../components/Signup'
import PageWrapper from '../components/PageWrapper'

function Signup() {
  return (
    <PageWrapper>
    <div className=''>
        <SignupComponent />
    </div>
    </PageWrapper>
  )
}

export default Signup