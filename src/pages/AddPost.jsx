import React from 'react'
import Container from '../components/Container'
import PostForm from '../components/PostForm'
import PageWrapper from '../components/PageWrapper'

function AddPost() {
  return (
    <PageWrapper>
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div></PageWrapper>
  )
}

export default AddPost