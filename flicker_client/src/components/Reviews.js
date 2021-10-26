import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'


// import ReviewForm from './ReviewForm'
const Reviews = ({ reviews }) => {

    const sorted_reviews = reviews.sort((a,b) => a.created_at > b.created_at ? -1 : 1)

    return (
        <div>
            
            {sorted_reviews.map(review =>
            <ul>
                <div>
                <br/>
               {review.content}
               <br/>
               {review.author}

                </div>
            </ul>)
            }
        </div>
    )
}

    const mapStateToProps = (state) => {
        return { reviews: state.reviews}
    }


export default connect(mapStateToProps, { fetchReviews })(Reviews)
