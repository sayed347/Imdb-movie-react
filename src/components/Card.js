import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Card = ({movie}) => {
    const {addMovieToFavorite,favoris}=useContext(GlobalContext)
    let storedMovie=favoris.find(o=>o.id===movie.id)
    const favorisDisabled=storedMovie?true:false
  return (
    <div className='result-card'>
        <div className='poster-wraper'>
          {movie.poster_path?(
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
          ):(
              <div className='filter-poster'></div>
          )}
        </div>
        <div className='info'>
            <div className='header'>
               <h3 className='title'>{movie.title}</h3>
               <h4 className='release-date'> {movie.release_date}</h4>
            </div>
            <div className='controls'>
                <button className='btn' disabled={favorisDisabled} onClick={()=>{addMovieToFavorite(movie)}}>
                    Add to favorite

                </button>

            </div>

        </div>
      
    </div>
  )
}

export default Card
