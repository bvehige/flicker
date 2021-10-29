export const flickReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FLICK':
            return action.payload
        default:
            return state

    }
}