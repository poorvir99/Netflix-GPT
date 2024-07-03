import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    <div className='px-[36px]  '>
         <h1 className='pr-[48px] font-medium py-3 text-white'>{title}</h1>
        <div className='flex no-scrollbar overflow-x-scroll :-webkit-scrollbar display: none'>
        <div className='flex'>
        {movies?.map(movie=> ( 
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                ))}
       
    </div>  
    </div>

    </div>
  )
}

export default MovieList
