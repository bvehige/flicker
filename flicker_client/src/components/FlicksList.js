import React from "react";
import { connect } from 'react-redux'

const FlicksList = ({ flicks }) => {

    const sorted_flicks = flicks.sort((a,b) => a.created_at > b.created_at ? -1 : 1)

    return (
        <div className="flick_cards">
            Flicks to review...
            {sorted_flicks.map(flick =>
            <ul>
                <div className="flick_card" key={flick.id}>
                    <img src={flick.image} alt="Movie Poster"></img>

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