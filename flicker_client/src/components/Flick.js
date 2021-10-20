import React from 'react'
import { connect } from 'react-redux'

const Flick = ({ match, flicks }) => {
    const id = parseInt(match.params.id)
    const flick = flicks.find(flick => flick.id === id)

return (
    <div className="flick_show">
        <div className="flick_title">
            <h2> {flick.title} | {flick.year} | {flick.category}</h2>
            <img src={flick.image} alt="Movie Poster"/>
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        flicks: state.flicks
    }
}

export default connect(mapStateToProps)(Flick)