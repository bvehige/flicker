import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlick } from '../actions/flicksActions'

class FlicksForm extends Component {

    state = {
        title: '',
        year: '',
        category: '',
        image: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addFlick(this.state)
        this.setState({
            title: '',
            year: '',
            category: '',
            image: ''
        })
        window.location ='/flicks'
    }

    render() {
        return(
            <div className="flick_form">
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a new Flick for review via form</h2>
                    <label>Flick Title:</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title"></input>
                    <span>  </span>
                    <label>Flick Year:</label>
                    <input type="text" value={this.state.year} onChange={this.handleChange} name="year"></input>
                    <span>  </span>
                    <label>Flick Category (movie or series)</label>
                    <input type="text" value={this.state.category} onChange={this.handleChange} name="category"></input>
                    <span>  </span>
                    <label>Image URL:</label>
                    <input type="text" value={this.state.image} onChange={this.handleChange} name="image"></input>
                    <br/><br/>
                    <input type="submit" value="Submit Flick"></input>
                </form>
            </div>
        )
    }

}

export default connect(null, { addFlick})(FlicksForm)