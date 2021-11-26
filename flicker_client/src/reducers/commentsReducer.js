export const commentsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_COMMENTS":
            return action.payload
        case "ADD_COMMENT":
            return [...state, action.payload]
        case "DELETE_COMMENT":
            return state.filter(comment => comment.id !== +action.payload.id)
        default:
            return state
    }
}