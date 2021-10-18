import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        return (
            <div>
            <h1>Welcome to Flicker!</h1>
            <h2>Movie and TV reviews</h2>
            <div>
                
            </div>
            </div>
        )
    }
}

export default connect()(Home) 