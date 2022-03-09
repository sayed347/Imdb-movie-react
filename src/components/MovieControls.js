import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({movie}) => {
    const {removeMovieFromFavorite}=useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
        
            <>
            <button className='ctrl-btn'
            onClick={()=>{removeMovieFromFavorite(movie.id)}}>
                <i className='fa-fw fa fa-times'></i>

            </button>
            </>
        
      
    </div>
  )
}

export default MovieControls
