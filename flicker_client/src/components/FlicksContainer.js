import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFlicks } from '../actions/flicksActions'
import FlicksList from './FlicksList'
import Flick from './Flick'

const FlicksContainer = ({match, flicks}) => {

    return(
    <div>
        <h2>Select a Flick to read reviews or write a new review.</h2>
        <FlicksList />
        <Route exact path={`${match.url}/:flickId`} render={(routerProps) => <Flick {...routerProps} flicks={flicks} />} />
    </div>
    )
}

export default connect(null, { fetchFlicks })(FlicksContainer)