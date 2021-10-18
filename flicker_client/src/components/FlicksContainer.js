import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFlicks } from '../actions/flicksActions'
import FlicksList from './FlicksList'

const FlicksContainer = ({match, flicks}) => (
    <div>
        <h2>Select a Flick to read reviews or write a new review.</h2>
        <FlicksList />
    </div>
)

export default connect(null, { fetchFlicks })(FlicksContainer)