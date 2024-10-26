import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const Moviecard = ({posterPath}) => {
  return (
    <div className='w-64 h-96 pr-4'>
      <img className="w-full h-full object-cover rounded-lg shadow-md " alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default Moviecard;
