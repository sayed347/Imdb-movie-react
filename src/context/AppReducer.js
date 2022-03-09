export default (state,action)=>{
    switch (action.type){
        case "ADD_MOVIE_TO_FAVORITE":
            return{
                ...state,
                favoris:[action.payload,...state.favoris],

            }
        case "REMOVE_MOVIE_FROM_FAVORITE":
            return{
                ...state,
                favoris:state.favoris.filter(movie=>movie.id !== action.payload)
            }
        default:
            return state;
    }
}