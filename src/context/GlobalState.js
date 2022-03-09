import React,{createContext,useReducer,useEffect} from 'react';
import AppReducer from "./AppReducer"

const initialeState={
    favoris:localStorage.getItem('favoris')? JSON.parse(localStorage.getItem('favoris')):[],
    SeeLater:[],
};

export const GlobalContext=createContext(initialeState);

export const GlobalProvider=props=>{
    const [state,dispatch]=useReducer(AppReducer,initialeState);
    useEffect(()=>{
        localStorage.setItem('favoris',JSON.stringify(state.favoris))
    },[state])

     const addMovieToFavorite=movie=>{
         dispatch({type:"ADD_MOVIE_TO_FAVORITE", payload:movie})
     }
     const removeMovieFromFavorite=(id)=>{
         dispatch({type:"REMOVE_MOVIE_FROM_FAVORITE",payload:id})
     }

    return (
        <GlobalContext.Provider value={{favoris:state.favoris,SeeLater:state.SeeLater,addMovieToFavorite,removeMovieFromFavorite}}>
            {props.children}
        </GlobalContext.Provider>
    )
}