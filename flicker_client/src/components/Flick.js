import React from 'react'
import { connect } from 'react-redux'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'
import { useEffect } from 'react'
import { useState } from 'react'


const Flick = ({ match, flicks }) => {
    const id = parseInt(match.params.id)
    const flick = flicks.find(flick => flick.id === id)

    // const [flick, setFlick] = useState({
    // })

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:3000/flicks/${id}`)
    //     .then (resp => resp.json())
    //     .then(flick => setFlick(flick))
    // }, [])


return (
    <div className="flick_show">
        <div className="flick_title">
            <h2> {flick.title} | {flick.year} | {flick.category} | {flick.id}</h2>
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