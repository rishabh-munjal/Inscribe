import React, {useState, useEffect} from 'react'
import Container from '../components/Container';
import Postcard from '../components/Postcard';
import service from "../appwrite/config";
import PageWrapper from '../components/PageWrapper';

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    service.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <PageWrapper>
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
    </PageWrapper>
  )
}

export default AllPosts