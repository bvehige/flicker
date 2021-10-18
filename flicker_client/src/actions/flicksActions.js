
export const fetchFlicks = () => {
    return dispatch => {
        fetch("http://127.0.0.1:3000/flicks")
        .then(resp => resp.json())
        .then(flicks => {
            dispatch({ type: 'FETCH_FLICKS', payload: flicks})
        })
    }
}

export const addFlick = (flick) => {
    return dispatch => {
        fetch("http://127.0.0.1:3000/flicks", {
            method: "POST",
            body: JSON.stringify(flick),
            headers: { 'Content-Type': 'application/json' }})
        .then(resp => resp.json())
        .then(flick => dispatch({ type: 'ADD_FLICK', payload: flick}))
    }
    
}