export const fetchComments = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/comments")
        .then(resp => resp.json())
        .then(comments => {
            dispatch({ type: 'FETCH_COMMENTS', payload: comments})
        })
    }
}

