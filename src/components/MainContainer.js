import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';



const MainContainer = () => {

    const movies=useSelector(store=>store.movies?.nowPlayingMovies);

    if(!movies)return;

    const mainMovie=movies[0];
    // console.log("TMDB Key:", process.env.REACT_APP_TMDB_KEY);
    //console.log(mainMovie );

    const  {original_title,overview,id}=mainMovie;
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
