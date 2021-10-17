export const flicksReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FLICKS':
            return action.payload
        default:
            return state
    }
}