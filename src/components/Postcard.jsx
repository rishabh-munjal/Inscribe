import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import conf from '../conf/conf'

function Postcard({ $id, title, featuredImage }) {
  return (
    // <Link to={`/post/${$id}`}>

    //   <div className='w-full bg-gray-100 rounded-xl p-4'>
    //     <div className='w-full justify-center mb-4'>
    //       <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
    //     </div>
    //     <h2>{title}</h2>
    //   </div>

    // </Link>


    <Link to={`/post/${$id}`}>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Postcard
