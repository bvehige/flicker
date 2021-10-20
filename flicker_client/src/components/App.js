import React, { Component } from 'react'
import Router from './Router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFlicks } from '../actions/flicksActions'
import './App.css'

class App extends Component {
    componentDidMount() {
        this.props.fetchFlicks()
    }

    render() {
        return (
            <div className="header">
                <button className="button-header"><h4><Link to="/">Home</Link></h4></button>
                <button className="button-header"><h4><Link to="/about">About</Link></h4></button>
            <Router />
            </div>
        )
    }
}

export default connect(null, { fetchFlicks })(App)