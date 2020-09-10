
const initState = {
    tweets:null
}
const rootReducer = (state=initState,action) =>{
    console.log("rootReducer");
    console.log(action);
    if(action.type === 'ADD_TWEETS') {
        return {
            ...state,
            tweets: action.tweets
        }
    }
    return state;
}

export default rootReducer;