import useNowPlayingmovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingmovies();

  return (
    <div>
      <Header/>
      {/* {
          MainContainer
            -VideoBackground
            -VideoTitle
          SecoundaryContainer
            -MovieList * n
            -cards * n
      
      
      } */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;
