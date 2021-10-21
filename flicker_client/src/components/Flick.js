import React from 'react'
import { connect } from 'react-redux'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'

const Flick = ({ match, flicks }) => {
    const id = parseInt(match.params.id)
    const flick = flicks.find(flick => flick.id === id)

return (
    <div className="flick_show">
        <div className="flick_title">
            <h2> {flick.title} | {flick.year} | {flick.category}</h2>
            <img src={flick.image} alt="Movie Poster"/>
            <br/>
        </div>
        <br/>
        <div className="review_form">
        <ReviewForm flickId={flick.id}/>
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
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Flick)