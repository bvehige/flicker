export const fetchReviews = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/reviews")
        .then(resp => resp.json())
        .then(reviews => {
            dispatch({ type: 'FETCH_REVIEWS', payload: reviews})
        })
    }
}

export const addReview = (review, flickId) => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/reviews", {
            method: "POST",
            body: JSON.stringify({review, flick_id: flickId}),
            headers: { 'Content-Type' : 'application/json'}})
            .then(resp => resp.json())
            .then(review => dispatch({ type: 'ADD_REVIEW', payload: review}))
        }
    }

export const deleteReview = (review) => {
    console.log(review)
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/reviews/${review.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(review => dispatch({ type: 'DELETE_REVIEW', payload: review}))
    }
}
