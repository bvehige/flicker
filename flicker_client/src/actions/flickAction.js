export const fetchFlick = (id) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/flicks/${id}`)
        .then(resp => resp.json())
        .then(flick => dispatch({ type: 'FETCH_FLICK', payload: flick}))
    }
}