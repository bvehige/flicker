import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../actions/reviewsActions'

class ReviewForm extends Component {

    state = {
        content: '',
        author: '',
        flick_id: this.props.flickId
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState ({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        this.props.addReview(this.state)
        this.setState({
            content: '',
            author: '',
            flick_id: ''
        })
    }

    render(){
        return (
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new review:  </label>
                    <br/>
                    <textarea rows="4" cols="60" placeholder="Write your review..." type="text" value={this.state.content} onChange={this.handleChange} name="content" />
                    <br />
                    <label>Reviewer's name: </label>
                    <input placeholder="Your name" type="text" value={this.state.author} onChange={this.handleChange} name="author" />
                    <br /><br />
                    <input type="submit" value="Submit Review" />

                </form>
            </div>

        )
    }
}

export default connect(null, { addReview })(ReviewForm)