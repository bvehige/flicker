import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const FlicksList = ({ flicks }) => {

    const sorted_flicks = flicks.sort((a,b) => a.created_at > b.created_at ? -1 : 1)

    return (
        <div className="flick_cards">
            <h2>Select a Flick to read reviews or write a new review.</h2>
            {sorted_flicks.map(flick =>
            <ul>
                <div className="flick_card" key={flick.id}>
                    <Link key={flick.id} to={`/flicks/${flick.id}`}>             
                    <img src={flick.image} alt="Movie Poster"></img></Link>
                </div>
            </ul>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { flicks: state.flicks }
}
export default connect(mapStateToProps)(FlicksList)