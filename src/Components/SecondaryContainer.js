import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return  (
    movies.nowPlayingMovies &&(
    <div className="bg-black">
      <div className="-mt-[340px] relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
    )
  )
}

export default SecondaryContainer