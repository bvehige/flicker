export const reviewsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_REVIEWS":
            return action.payload
        case "ADD_REVIEW":
            return [...state, action.payload]
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.payload.id)
        default:
            return state
    }
}