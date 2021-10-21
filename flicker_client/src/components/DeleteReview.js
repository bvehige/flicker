import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviewsActions'
import { fetchReviews } from '../actions/reviewsActions'

class DeleteReview extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.reviewId
        }
        this.handleDeleteReview = this.handleDeleteReview.bind(this)

    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    handleDeleteReview = e => {
        e.preventDefault()
        this.props.deleteReview(this.state, this.props.reviewId)
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDeleteReview}>Delete Review</button>
            </div>
        )
    }   

}

export default connect(null, { deleteReview, fetchReviews })(DeleteReview)