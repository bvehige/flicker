import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFlicks } from '../actions/flicksActions'
import FlicksList from './FlicksList'

const FlicksContainer = ({match, flicks}) => {

    return(
    <div>
        
        <FlicksList />
    </div>
    )
}

export default connect(null, { fetchFlicks })(FlicksContainer)