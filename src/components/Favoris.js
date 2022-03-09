import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';
const Favoris = () => {
    const {favoris}=useContext(GlobalContext);
    
  return (
    <div className='movie-page'>
        <div className='container'>
            <div className='header'>
                <h1 className='heading'> My Favorite Movies</h1>

            </div>
            {favoris.length >0 ?(
             <div className='movie-grid'>
                {favoris.map(movie=>(
                    <MovieCard movie={movie}/>
                ))}

            </div>   
            ):(<h2 className='no-movies'>no movies in your favorite List to watch</h2>)}
            
            

        </div>
       
    </div>
)}
    

export default Favoris
