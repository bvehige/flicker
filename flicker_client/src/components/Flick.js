import React from 'react'
import { connect } from 'react-redux'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchFlick } from '../actions/flickAction'


const Flick = ({ match, flick }) => {

    const dispatch = useDispatch()

    const id = parseInt(match.params.id)

    useEffect(() => {
        dispatch(fetchFlick(`${id}`));
    }, [dispatch])
    

return (
    <div className="flick_show">
        <div className="flick_title">
            <h2> {flick.title} | {flick.year} | {flick.category} | </h2>
            <img src={flick.image} alt="Movie Poster"/>
            <br/>
        </div>
        <br/>
        <div className="review_form">
        <ReviewForm flickId={id}/>
        </div>
        <div className="review_list">
            <h4>Reviews of {flick.title}:</h4>
            <ReviewsList flickId={flick.id} />
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        flicks: state.flicks,
        reviews: state.reviews,
        flick: state.flick
    }
}

export default connect(mapStateToProps)(Flick)