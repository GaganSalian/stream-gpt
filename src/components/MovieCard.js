import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const Moviecard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className=' w-36  md:w-64 h-63 md:h-90 pr-4'>
      <img className="w-full h-full object-cover rounded-lg shadow-md " alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default Moviecard;
