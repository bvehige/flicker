export const flicksReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FLICKS':
            return action.payload
        case 'ADD_FLICK':
            return [...state, action.payload]
        default:
            return state
    }
}