import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";

import Container from '../components/Container';
import Postcard from '../components/Postcard';
import PageWrapper from '../components/PageWrapper';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }
    return (
        <PageWrapper>
        <div className='w-full py-8'>
            <div className='w-full py-16 text-center'>
                <div className='max-w-3xl mx-auto px-4'>
                    <h1 className='font-bold text-5xl text-gray-800 mb-6'>
                        Write Smarter, Not Harder
                    </h1>
                    <p className='font-normal text-lg text-gray-600 mb-10'>
                        Elevate your writing with <span className='text-indigo-600 border-indigo-600 border rounded-xl px-2 font-medium '>AI-powered grammar</span> suggestions. Transform your blog posts from good to exceptional.
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                            Start Writing
                        </button>
                        <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                            Learn More
                        </button>
                    </div>
                    <br /><br /><br /> <br />
                    <span className='block text-gray-500 mt-4 '>Scroll Down to Dive into Our Latest Blogs 👇 </span>
                </div>
            </div>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>

        </div>
        </PageWrapper>
    )
}

export default Home