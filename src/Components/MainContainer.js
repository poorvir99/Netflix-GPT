import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer=()=>{

    const movies=useSelector(store=>store.movies?.nowPlayingMovies);

    if(!movies) return; // its also equal to (movies===null) if movies is null or not(!) equal to movies then return dont go to next line this is know as early return.

    const mainMovie=movies[0];
    // console.log(mainMovie);
    const {original_title,overview,id}= mainMovie;

    return(
        <div>
           <VideoTitle title={original_title} overview={overview}/>
           <VideoBackground movieId={id}/>

        </div>
    );
};

export default MainContainer;