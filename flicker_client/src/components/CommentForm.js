import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/commentsAction'

class CommentForm extends Component {

    state = {
        content: "",
        author: "",
        review_id: this.props.reviewId
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            content: "",
            author: "",
            review_id: ""
        })
    }

    render() {
        return (
            <div className="comment_form">
                <form onSubmit={this.handleSubmit}>
                    <label>Add a Comment:</label><br/>
                    <input placeholder="Your name" type="text" value={this.state.author} onChange={this.handleChange} name="author" /><br/>
                    <textarea rows="2" cols="40" placeholder="Share your thoughts" type="text" value={this.state.content} onChange={this.handleChange} name="content"></textarea>
                    <br/> 
                    <input type="submit" value="Submit Comment"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm)