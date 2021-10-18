export const searchReducer = (state = [], action) => {
    switch(action.type){
        case 'LOAD_SEARCH':
            return action.payload
        default:
            return state
    }
}